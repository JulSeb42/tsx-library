/*=============================================== Avatar styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

const StyledAvatar = styled.span<{
    $color?: LibColorsTypes | ColorsShortTypes | string
    $contentColor?: LibColorsTypes | ColorsShortTypes | string
    $size?: number
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    background-color: ${Mixins.AllColors};
    color: ${({ $color, $contentColor }) =>
        $color === "white" && !$contentColor
            ? Variables.Colors.Primary500
            : $contentColor
            ? Mixins.AllColors({ $color: $contentColor })
            : Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $size }) => ($size ? $size * 0.6 : 48 * 0.6)}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    overflow: hidden;
`

export { StyledAvatar }
