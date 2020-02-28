import Select from "@skbkontur/react-ui/Select";
import * as React from "react";
import { BusinessObjectFieldFilterOperator } from "Domain/EDI/Api/AdminTools/DataTypes/BusinessObjectFieldFilterOperator";

interface OperatorSelectProps {
    value: Nullable<BusinessObjectFieldFilterOperator>;
    onChange: (x0: BusinessObjectFieldFilterOperator) => void;
    availableValues: BusinessObjectFieldFilterOperator[];
}

export function OperatorSelect(props: OperatorSelectProps): JSX.Element {
    const { availableValues, value, onChange } = props;
    return (
        <Select
            width={70}
            data-tid="OperatorSelect"
            items={availableValues.map(x => [x, operatorToString(x)] as [BusinessObjectFieldFilterOperator, string])}
            onChange={(e, nextValue) => {
                if (nextValue != null) {
                    onChange(nextValue);
                }
            }}
            value={value}
        />
    );
}

function operatorToString(operation: BusinessObjectFieldFilterOperator): string {
    const filterOperators = {
        GreaterThanOrEquals: ">=",
        LessThanOrEquals: "<=",
        DoesNotEqual: "!=",
        GreaterThan: ">",
        LessThan: "<",
        Equals: "=",
    };
    const result = filterOperators[operation];
    if (result != null) {
        return result;
    }
    return "=";
}
