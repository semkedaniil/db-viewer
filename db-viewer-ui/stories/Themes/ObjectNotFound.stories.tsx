import { DEFAULT_THEME, DEFAULT_THEME_8PX, FLAT_THEME, ThemeContext, ThemeFactory } from "@skbkontur/react-ui";
import { Theme } from "@skbkontur/react-ui/lib/theming/Theme";
import React from "react";
import StoryRouter from "storybook-react-router";

import { NullCustomRenderer } from "../../src";
import { ObjectDetailsContainer } from "../../src/Containers/ObjectDetailsContainer";
import { DbViewerApiFake } from "../Api/DbViewerApiFake";

import { infraUiDark } from "./infraUiDark";
import { reactUiDark } from "./reactUiDark";

export default {
    title: "Themes/ObjectNotFound",
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
            objectId="NotFound"
        />
    </ThemeContext.Provider>
);

export const Default = (): JSX.Element => <DetailsContainer theme={DEFAULT_THEME} />;
export const Flat = (): JSX.Element => <DetailsContainer theme={FLAT_THEME} />;
export const EightPx = (): JSX.Element => <DetailsContainer theme={DEFAULT_THEME_8PX} />;
export const Dark = (): JSX.Element => <DetailsContainer theme={ThemeFactory.create(reactUiDark)} />;
export const InfraDark = (): JSX.Element => <DetailsContainer theme={ThemeFactory.create(infraUiDark)} />;
