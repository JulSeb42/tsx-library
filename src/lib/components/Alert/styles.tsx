/*=============================================== Alert styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, stringifyPx } from "../../"
import type {
    ColorsHoverTypes,
    AllColorsTypes,
    PaddingTypes,
    RadiusesTypes,
    FontSizeTypes,
    CustomFontSizeTypes,
    FontWeightTypes,
    SpacersTypes,
} from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledAlert = styled.div<{
    $maxWidth?: number
    $padding?: PaddingTypes
    $borderRadius?: RadiusesTypes
    $fontSize?: FontSizeTypes
    $customFontSize?: CustomFontSizeTypes
    $fontWeight?: FontWeightTypes
    $gap?: SpacersTypes
    $color: ColorsHoverTypes
    $backgroundColor?: AllColorsTypes
    $borderColor?: AllColorsTypes
    $textColor?: AllColorsTypes
    $borderWidth?: number
}>`
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};
    ${Mixins.Padding};
    ${Mixins.BorderRadius};
    ${Mixins.FontSize};
    ${Mixins.FontWeight};
    border-width: var(--border-width);
    border-style: solid;
    color: ${({ theme, $textColor }) =>
        theme.AllColors({ $color: $textColor })};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $flexDirection: "column",
            $alignItems: "stretch",
        })};

    ${({ $color, $backgroundColor, $borderColor, theme, $borderWidth }) =>
        $backgroundColor || $borderColor
            ? css`
                  background-color: ${theme.AllColors({
                      $color: $backgroundColor,
                  })};
                  border-color: ${theme.AllColors({
                      $color: $borderColor,
                  })};
              `
            : css`
                  background-color: ${theme.Colors50({ $color })};
                  border-color: ${theme.ColorsShort({ $color })};
              `};
`

setDefaultTheme([StyledAlert])

export { StyledAlert }
