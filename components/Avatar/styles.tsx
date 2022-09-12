/*=============================================== Avatar styles ===============================================*/

import styled, { css } from "styled-components"

import { FontWeights, Radiuses, Spacers } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { AllColorsTypes } from "../../utils/common-types"

const AvatarContainer = styled.span<{ $size?: number }>`
    position: relative;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
`

const StyledAvatar = styled.span<{
    $color?: AllColorsTypes
    $contentColor?: AllColorsTypes
    $size?: number
    $border?: boolean
    $borderWidth?: number
    $borderColor?: AllColorsTypes
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Radiuses.Circle};
    background-color: ${({ theme }) => theme.AllColors};
    color: ${({ $color, $contentColor, theme }) =>
        $color === "white" && !$contentColor
            ? theme.Primary500
            : $color === "black" && !$contentColor
            ? theme.White
            : $contentColor
            ? theme.AllColors({
                  $color: $contentColor,
              })
            : theme.Background};
    font-weight: ${FontWeights.Black};
    font-size: ${({ $size }) => ($size ? $size * 0.7 : 48 * 0.7)}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    overflow: hidden;
    padding: 0;

    ${({ $border, theme, $borderColor, $borderWidth }) =>
        $border &&
        css`
            border: ${$borderWidth}px solid
                ${theme.AllColors({ $color: $borderColor })};
        `}
`

const badgeSize = 16

const Badge = styled.span<{
    $background?: AllColorsTypes
    $textColor?: AllColorsTypes
    $length: number
    $position?: "top" | "bottom"
}>`
    min-width: ${badgeSize}px;
    height: ${badgeSize}px;
    background-color: ${({ theme, $background }) =>
        theme.AllColors({ $color: $background })};
    color: ${({ theme, $textColor }) =>
        theme.AllColors({ $color: $textColor })};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    border-radius: ${Radiuses.Round};
    padding: 0 ${({ $length }) => $length > 2 && Spacers.XS};
    font-size: ${badgeSize * 0.7}px;
    position: absolute;
    top: ${({ $position }) => $position === "top" && 0};
    bottom: ${({ $position }) => $position === "bottom" && 0};
    right: 0;
`

setDefaultTheme([StyledAvatar, Badge, AvatarContainer])

export { StyledAvatar, Badge, AvatarContainer }
