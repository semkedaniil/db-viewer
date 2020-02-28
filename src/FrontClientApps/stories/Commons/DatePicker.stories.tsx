import { action, storiesOf } from "@kadira/storybook";
import * as React from "react";
import { DatePicker } from "ui";
import { TimeUtils } from "Commons/TimeUtils";

import { WithState } from "../WithState";

function getInitialValue(value: Date): { value: Date } {
    return {
        value: value,
    };
}

storiesOf(module)
    .add("Default", () => (
        <WithState initial={getInitialValue(new Date())}>
            {(state, onChange) => (
                <DatePicker
                    value={state.value}
                    onChange={(e, x) => {
                        action("onChange")(x);
                        // @ts-ignore
                        onChange({ value: x });
                    }}
                />
            )}
        </WithState>
    ))
    .add("Default [timezone=Moscow]", () => (
        <WithState initial={getInitialValue(new Date())}>
            {(state, onChange) => (
                <DatePicker
                    value={state.value}
                    timeZone={TimeUtils.TimeZones.Moscow}
                    onChange={(e, x) => {
                        action("onChange")(x);
                        // @ts-ignore
                        onChange({ value: x });
                    }}
                />
            )}
        </WithState>
    ))
    .add("Disabled", () => (
        <WithState initial={getInitialValue(new Date())}>
            {(state, onChange) => (
                <DatePicker
                    value={state.value}
                    disabled
                    onChange={(e, x) => {
                        action("onChange")(x);
                        // @ts-ignore
                        onChange({ value: x });
                    }}
                />
            )}
        </WithState>
    ))
    .add("With error", () => (
        <WithState initial={getInitialValue(new Date())}>
            {(state, onChange) => (
                <DatePicker
                    value={state.value}
                    error
                    onChange={(e, x) => {
                        action("onChange")(x);
                        // @ts-ignore
                        onChange({ value: x });
                    }}
                />
            )}
        </WithState>
    ));
