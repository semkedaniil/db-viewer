import {
    DEFAULT_THEME,
    DEFAULT_THEME_8PX_OLD,
    FLAT_THEME_8PX_OLD,
    ThemeContext,
    ThemeFactory,
} from "@skbkontur/react-ui";
import { Theme } from "@skbkontur/react-ui/lib/theming/Theme";
import React from "react";
import StoryRouter from "storybook-react-router";

import { NullCustomRenderer } from "../../src";
import { ObjectDetailsContainer } from "../../src/Containers/ObjectDetailsContainer";
import { DbViewerApiFake } from "../Api/DbViewerApiFake";

import { reactUiDark } from "./reactUiDark";

export default {
    title: "Themes/ObjectDetails",
    decorators: [StoryRouter()],
};

const DetailsContainer = ({ theme }: { theme: Theme }) => (
    <ThemeContext.Provider value={theme}>
        <ObjectDetailsContainer
            isSuperUser
            dbViewerApi={new DbViewerApiFake()}
            customRenderer={new NullCustomRenderer()}
            useErrorHandlingContainer
            objectQuery="Id=Id"
            objectId="Object"
        />
    </ThemeContext.Provider>
);

export const Default = (): JSX.Element => <DetailsContainer theme={DEFAULT_THEME} />;
export const Flat = (): JSX.Element => <DetailsContainer theme={FLAT_THEME_8PX_OLD} />;
export const Old = (): JSX.Element => <DetailsContainer theme={DEFAULT_THEME_8PX_OLD} />;
export const Dark = (): JSX.Element => <DetailsContainer theme={ThemeFactory.create(reactUiDark)} />;
