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
    BorderTypes,
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
    $textColor?: AllColorsTypes
    $border?: BorderTypes
}>`
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth && stringifyPx($maxWidth)};
    ${Mixins.Padding};
    ${Mixins.BorderRadius};
    ${Mixins.FontSize};
    ${Mixins.FontWeight};
    color: ${({ theme, $textColor }) =>
        theme.AllColors({ $color: $textColor })};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $flexDirection: "column",
            $alignItems: "stretch",
        })};

    ${({ $border, $color }) =>
        Mixins.Border({
            $border: {
                width: $border?.width || 1,
                style: $border?.style || "solid",
                color: $border?.color || $color || "primary",
            },
        })}

    ${({ $color, $backgroundColor, theme }) =>
        $backgroundColor
            ? css`
                  background-color: ${theme.AllColors({
                      $color: $backgroundColor,
                  })};
              `
            : css`
                  background-color: ${theme.Colors50({ $color })};
              `};
`

setDefaultTheme([StyledAlert])

export { StyledAlert }
