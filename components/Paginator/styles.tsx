/*=============================================== Paginator styles ===============================================*/

import styled from "styled-components"

import {
    ThemeDark,
    ThemeLight,
    Radiuses,
    FontSizes,
    FontFamilies,
    Spacers,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { InputBackgroundTypes } from "../Input/types"
import { ColorsHoverTypes } from "../../utils/common-types"

import { JustifyTypes } from "./types"

const StyledPaginator = styled.div<{ $justify?: JustifyTypes }>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: $justify === "right" ? "flex-end" : "flex-start",
            $gap: "xs",
        })};
`

const StyledInput = styled.input<{
    $accentColor?: ColorsHoverTypes
    $background?: InputBackgroundTypes
}>`
    height: 32px;
    width: 48px;
    border: 1px solid ${({ theme }) => theme.Gray200};
    border-radius: ${Radiuses.S};
    font-size: ${FontSizes.Body};
    font-family: ${FontFamilies.Body};
    padding: ${Spacers.XS};
    background-color: ${({ theme, $background }) =>
        $background === "dark"
            ? ThemeDark.Background
            : $background === "light"
            ? ThemeLight.Background
            : theme.Background};
    color: ${({ theme, $background }) =>
        $background === "dark"
            ? ThemeDark.Font
            : $background === "light"
            ? ThemeLight.Font
            : theme.Font};
    line-height: 100%;
    outline: none;
    z-index: 0;
    -moz-appearance: textfield;

    &:focus {
        border-color: ${({ $accentColor, theme }) =>
            theme.AllColors({ $color: $accentColor })};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`

setDefaultTheme([StyledPaginator, StyledInput])

export { StyledPaginator, StyledInput }
