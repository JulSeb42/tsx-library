/*=============================================== Avatar styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, FontWeights, Radiuses, Spacers } from "../../"
import type { AllColorsTypes, RadiusesTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

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
    $borderRadius?: RadiusesTypes
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${Mixins.BorderRadius};
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
    $width: number
}>`
    min-width: ${badgeSize}px;
    width: ${({ $length }) => $length <= 1 && `${badgeSize}px`};
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
    padding: 0 ${({ $length }) => $length > 1 && Spacers.XXS};
    font-size: ${badgeSize * 0.7}px;
    position: absolute;
    top: ${({ $position }) => $position === "top" && 0};
    bottom: ${({ $position }) => $position === "bottom" && 0};
    right: calc(${Spacers.XS} * -1);
`

setDefaultTheme([StyledAvatar, AvatarContainer, Badge])

export { StyledAvatar, AvatarContainer, Badge }
