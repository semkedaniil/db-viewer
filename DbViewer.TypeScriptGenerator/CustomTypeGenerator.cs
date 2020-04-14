﻿using System;
using System.Reflection;
using System.Text.RegularExpressions;

using SkbKontur.TypeScript.ContractGenerator;
using SkbKontur.TypeScript.ContractGenerator.CodeDom;
using SkbKontur.TypeScript.ContractGenerator.TypeBuilders;

namespace SkbKontur.DbViewer.TypeScriptGenerator
{
    public class CustomTypeGenerator : ICustomTypeGenerator
    {
        public string GetTypeLocation(Type type)
        {
            var typeName = type.Name;
            const string dbViewerNamespace = "SkbKontur.DbViewer.";
            if (type.FullName != null && type.FullName.StartsWith(dbViewerNamespace))
            {
                var name = type.FullName.Replace(dbViewerNamespace, "").Replace(".", "/");
                return new Regex("`.*$").Replace(name, "");
            }

            return type.IsGenericType ? new Regex("`.*$").Replace(typeName, "") : typeName;
        }

        public ITypeBuildingContext ResolveType(string initialUnitPath, Type type, ITypeScriptUnitFactory unitFactory)
        {
            if (InternalApiTypeBuildingContext.Accept(type))
            {
                var targetUnit = unitFactory.GetOrCreateTypeUnit(initialUnitPath);
                return new InternalApiTypeBuildingContext(targetUnit, type);
            }

            return null;
        }

        public TypeScriptTypeMemberDeclaration ResolveProperty(TypeScriptUnit unit, ITypeGenerator typeGenerator, Type type, PropertyInfo property)
        {
            return null;
        }
    }
}