/*=============================================== Badge styles ===============================================*/

import styled from "styled-components"

import { Mixins, FontWeights } from "../../"
import type { AllColorsTypes, PaddingTypes, RadiusesTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledBadge = styled.span<{
    $color?: AllColorsTypes
    $textColor?: AllColorsTypes
    $size?: number
    $children?: boolean
    $childrenLength?: number
    $padding?: PaddingTypes
    $borderRadius?: RadiusesTypes
}>`
    min-width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    font-size: ${({ $size }) => ($size ? $size * 0.7 : 16 * 0.7)}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    background-color: ${({ theme }) => theme.AllColors};
    ${Mixins.BorderRadius};
    color: ${({ $color, $textColor, theme }) =>
        $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : $textColor
            ? theme.AllColors({ $color: $textColor })
            : theme.Background};
    font-weight: ${FontWeights.Black};
    ${({ $children, $childrenLength, $padding }) =>
        $children &&
        $childrenLength &&
        $childrenLength > 2 &&
        Mixins.Padding({
            $padding: !$padding
                ? {
                      leftRight: "xxs",
                      topBottom: 0,
                  }
                : $padding,
        })};
`

setDefaultTheme([StyledBadge])

export { StyledBadge }
