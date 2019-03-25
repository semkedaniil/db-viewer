﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

using Cassandra.Mapping.Attributes;

using Kontur.DBViewer.Core.DTO;
using Kontur.DBViewer.Recipes.CQL.Utils.ObjectsParser;

namespace Kontur.DBViewer.Recipes.CQL.Utils
{
    public static class CriterionHelper
    {
        public static LambdaExpression BuildSameIdentitiesPredicate(Type type, object @object)
        {
            var parameter = Expression.Parameter(type);
            var properties = type.GetProperties().Where(
                x => x.GetCustomAttribute(typeof(ClusteringKeyAttribute)) != null
                     || x.GetCustomAttribute(typeof(PartitionKeyAttribute)) != null
            ).ToArray();
            var filtersExpressions = properties
                                     .Select(property => Expression.Equal(
                                                 Expression.Property(parameter, property),
                                                 Expression.Constant(property.GetMethod.Invoke(@object, null), property.PropertyType)
                                             )).ToArray();
            return Expression.Lambda(filtersExpressions.Skip(1).Aggregate(filtersExpressions[0], Expression.AndAlso), parameter);
        }

        public static LambdaExpression BuildPredicate(Type type,
                                                      Filter[] filters)
        {
            var parameter = Expression.Parameter(type);
            var filterExpression = filters
                                   .Select(filter =>
                                       {
                                           var memberExpression = CreateMemberAccessExpression(filter.Field, parameter);
                                           var valueExpression = CreateValueExpression(filter.Value, memberExpression.Type);
                                           var expression = CreateFilterExpression(memberExpression.Type, filter.Type, memberExpression, valueExpression);
                                           if(Nullable.GetUnderlyingType(memberExpression.Type)?.IsEnum == true)
                                           {
                                               if(filter.Type == FilterType.NotEquals && !string.IsNullOrEmpty(filter.Value))
                                                   expression = Expression.OrElse(
                                                       expression,
                                                       CreateFilterExpression(memberExpression.Type, FilterType.Equals, memberExpression,
                                                                              Expression.Constant(null))
                                                   );
                                           }

                                           return expression;
                                       }).ToArray();

            return Expression.Lambda(filterExpression.Skip(1).Aggregate(filterExpression[0], Expression.AndAlso), parameter);
        }

        private static Expression CreateMemberAccessExpression(string path, Expression root)
        {
            return path.Split('.').Aggregate(root, Expression.Property);
        }

        private static ConstantExpression CreateValueExpression(string stringValue,
                                                                Type targetType)
        {
            var parsedValue = ObjectParser.Parse(targetType, stringValue);
            var valueExpression = Expression.Constant(parsedValue, targetType);
            return valueExpression;
        }

        private static BinaryExpression CreateFilterExpression(Type propertyType, FilterType @operator,
                                                               Expression leftExpression, Expression rightExpression)
        {
            if(propertyType == typeof(string))
            {
                var compareToInvokation = Expression.Call(leftExpression, typeof(string).GetMethod("CompareTo", new[]{typeof(string)}), rightExpression);
                return makeBinaryExpressionByOperator[@operator](compareToInvokation, Expression.Constant(0, typeof(int)));
            }
            return makeBinaryExpressionByOperator[@operator](leftExpression, rightExpression);
        }

        private static readonly Dictionary<FilterType, Func<Expression, Expression, BinaryExpression>>
            makeBinaryExpressionByOperator =
                new Dictionary<FilterType, Func<Expression, Expression, BinaryExpression>>
                    {
                        {FilterType.Equals, Expression.Equal},
                        {FilterType.Less, Expression.LessThan},
                        {FilterType.Greater, Expression.GreaterThan},
                        {FilterType.LessOrEqual, Expression.LessThanOrEqual},
                        {FilterType.GreaterOrEqual, Expression.GreaterThanOrEqual},
                        {FilterType.NotEquals, Expression.NotEqual},
                    };
    }
}