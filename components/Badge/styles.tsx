/*=============================================== Badge styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Spacers, Radiuses } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"

const StyledBadge = styled.span<{
    $color?: AllColorsTypes
    $textColor?: AllColorsTypes
    $size?: number
    $children?: boolean
    $childrenLength?: number
    $padding?: SpacersTypes | number | string
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
    border-radius: ${Radiuses.Round};
    color: ${({ $color, $textColor, theme }) =>
        $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : $textColor
            ? theme.AllColors({ $color: $textColor })
            : theme.Background};
    font-weight: ${FontWeights.Black};
    padding: ${({ $children, $childrenLength, $padding }) =>
        $children && $childrenLength && $childrenLength > 2 && $padding
            ? Mixins.Spacers({ $spacer: $padding })
            : $children &&
              $childrenLength &&
              $childrenLength > 2 &&
              !$padding &&
              `0 ${Spacers.XXS}`};
`

setDefaultTheme([StyledBadge])

export { StyledBadge }
