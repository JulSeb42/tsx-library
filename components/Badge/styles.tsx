/*=============================================== Badge styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import {
    ColorsShortTypes,
    LibColorsTypes,
    SpacersTypes,
} from "../../utils/common-types"

const StyledBadge = styled.span<{
    $color?: ColorsShortTypes | LibColorsTypes | string
    $textColor?: ColorsShortTypes | LibColorsTypes | string
    $size?: number
    $children?: boolean
    $childrenLength?: number
    $padding?: SpacersTypes | number | string
}>`
    min-width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    font-size: ${({ $size }) => ($size ? $size * 0.6 : 16 * 0.6)}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    background-color: ${Mixins.AllColors};
    border-radius: ${Variables.Radiuses.Round};
    color: ${({ $color, $textColor }) =>
        $color === "white"
            ? Variables.Colors.Primary500
            : $textColor
            ? Mixins.AllColors({ $color: $textColor })
            : Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Black};
    padding: ${({ $children, $childrenLength, $padding }) =>
        $children && $childrenLength && $childrenLength > 2 && $padding
            ? Mixins.Spacers({ $spacer: $padding })
            : $children &&
              $childrenLength &&
              $childrenLength > 2 &&
              !$padding &&
              `0 ${Variables.Spacers.XXS}`};
`

export { StyledBadge }
