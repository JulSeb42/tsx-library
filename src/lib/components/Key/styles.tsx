/*=============================================== Key styles ===============================================*/

import styled from "styled-components"

import { Mixins, FontSizes, stringifyPx, ThemeLight } from "../../"
import type {
    FontSizeTypes,
    AllColorsTypes,
    PaddingTypes,
    RadiusesTypes,
    ColorsHoverTypes,
} from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledKey = styled.span<{
    $fontSize?: FontSizeTypes
    $fontColor?: AllColorsTypes
    $backgroundColor?: ColorsHoverTypes
    $borderColor?: ColorsHoverTypes
    $padding?: PaddingTypes
    $borderRadius?: RadiusesTypes
    $borderWidth: number
}>`
    border: ${({ $borderWidth }) => $borderWidth}px solid
        ${({ theme, $borderColor }) =>
            theme.ColorsHoverDefault({ $color: $borderColor })};
    border-bottom-width: ${({ $borderWidth }) => $borderWidth + 1}px;
    background-color: ${({ $backgroundColor, theme }) =>
        theme.Colors50({ $color: $backgroundColor })};
    width: fit-content;
    justify-self: start;
    ${Mixins.Padding};
    ${Mixins.BorderRadius};
    color: ${({ $fontColor, $backgroundColor, theme }) =>
        $fontColor
            ? theme.AllColors({ $color: $fontColor })
            : $backgroundColor === "white"
            ? ThemeLight.Black
            : theme.Font};
    font-size: ${({ $fontSize }) =>
        $fontSize === "display-h1"
            ? FontSizes.Display.H1
            : $fontSize === "display-h2"
            ? FontSizes.Display.H2
            : $fontSize === "display-h3"
            ? FontSizes.Display.H3
            : $fontSize === "display-h4"
            ? FontSizes.Display.H4
            : $fontSize === "display-h5"
            ? FontSizes.Display.H5
            : $fontSize === "title-h1"
            ? FontSizes.Titles.H1
            : $fontSize === "title-h2"
            ? FontSizes.Titles.H2
            : $fontSize === "title-h3"
            ? FontSizes.Titles.H3
            : $fontSize === "title-h4"
            ? FontSizes.Titles.H4
            : $fontSize === "title-h5"
            ? FontSizes.Titles.H5
            : $fontSize === "title-h6"
            ? FontSizes.Titles.H6
            : $fontSize === "body"
            ? FontSizes.Body
            : $fontSize === "small"
            ? FontSizes.Small
            : stringifyPx($fontSize)};
`

const Separator = styled.span<{ $color?: AllColorsTypes }>`
    color: ${({ theme }) => theme.AllColors};
`

setDefaultTheme([StyledKey, Separator])

export { StyledKey, Separator }
