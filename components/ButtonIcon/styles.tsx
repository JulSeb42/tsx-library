/*=============================================== ButtonIcon styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    Mixins,
    Breakpoints,
    ThemeDark,
    Overlays,
    Transitions,
    Spacers,
    FontSizes,
    FontWeights,
    stringifyPx,
} from "../../"
import {
    SpacersTypes,
    PositionsTypes,
    ColorsHoverTypes,
    ShadowsTypes,
    RadiusesTypes,
} from "../../types"
import { ButtonIconVariantTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledButtonIcon = styled.button<{
    $variant?: ButtonIconVariantTypes
    $color?: ColorsHoverTypes
    $size?: number
    $hoverBackground?: boolean
    $shadow?: ShadowsTypes
    $shadowDefault?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
    $position?: PositionsTypes
    $left?: SpacersTypes | string
    $top?: SpacersTypes | string
    $right?: SpacersTypes | string
    $bottom?: SpacersTypes | string
    $zIndex?: number
    $showLabel?: boolean
    $borderRadius?: RadiusesTypes
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    ${Mixins.BorderRadius};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    padding: 0;
    border: none;
    background-color: ${({ $variant, theme }) =>
        $variant === "plain" ? theme.ColorsHoverDefault : "transparent"};
    color: ${({ $variant, $color, theme }) =>
        $variant === "plain"
            ? $color === "white"
                ? theme.Primary500
                : $color === "background"
                ? theme.Font
                : theme.Background
            : theme.ColorsHoverDefault};
    ${({ $shadow, $shadowDefault, $shadowHover, $shadowActive }) =>
        Mixins.Shadow({
            $shadow: $shadow,
            $isExtended: $shadowDefault && true,
            $shadowDefault: $shadowDefault,
            $shadowHover: $shadowHover,
            $shadowActive: $shadowActive,
        })};
    text-decoration: none;

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ $variant, $hoverBackground, theme }) =>
                $variant === "plain"
                    ? theme.ColorsHoverHover
                    : $variant === "transparent" && $hoverBackground
                    ? theme.Gray50
                    : ""};
            color: ${({ $variant, theme }) =>
                $variant === "transparent" && theme.ColorsHoverHover};
        }

        &:not(:disabled):active {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain" && theme.ColorsHoverActive};
            color: ${({ $variant, theme }) =>
                $variant === "transparent" && theme.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $variant, theme }) =>
            $variant === "plain" && theme.Gray100};
        color: ${({ theme }) => theme.Gray500};
    }

    ${({ $showLabel, $left, $top, $right, $bottom, $zIndex, $position }) =>
        $showLabel
            ? css`
                  position: relative;
              `
            : css`
                  ${($left || $top || $right || $bottom) &&
                  Mixins.Position({
                      $zIndex: $zIndex,
                      $position: $position || "relative",
                      $left,
                      $top,
                      $right,
                      $bottom,
                  })}
              `};
`

const TooltipContainer = styled.span<{
    $position?: PositionsTypes
    $left?: SpacersTypes | string
    $top?: SpacersTypes | string
    $right?: SpacersTypes | string
    $bottom?: SpacersTypes | string
    $zIndex?: number
    $size?: number
}>`
    z-index: ${({ $zIndex }) => $zIndex};
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;

    ${({ $left, $top, $right, $bottom, $zIndex, $position }) =>
        !$position
            ? css`
                  position: relative;
              `
            : ($left || $top || $right || $bottom) &&
              Mixins.Position({
                  $zIndex: $zIndex,
                  $position: $position || "relative",
                  $left,
                  $top,
                  $right,
                  $bottom,
              })};
`

const Tip = styled.span<{
    $isVisible: boolean
    $width: number
    $bottom?: string | number
}>`
    ${""/* width: ${({ $width }) => $width}px; */}
    min-width: 60px;
    max-width: ${({ $width }) => `calc(${$width} + ${Spacers.XXS} * 2)`};
    background-color: ${({ theme }) =>
        theme === ThemeDark ? Overlays.Plain.White80 : Overlays.Plain.Black80};
    color: ${({ theme }) => theme.Background};
    text-align: center;
    padding: ${Spacers.XXS};
    border-radius: ${Radiuses.S};
    font-size: ${FontSizes.Small};
    font-weight: ${FontWeights.Regular};
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
    z-index: 1;
    transition: ${Transitions.Short};
    position: absolute;
    bottom: ${({ $bottom }) => ($bottom && stringifyPx($bottom))};
    left: ${({ $width }) => `calc(50% - ${$width}px / 2 - 2px)`};

    &:after {
        content: "";
        bottom: calc(${Spacers.XS} * -1 - 2px);
        left: ${({ $width }) => `calc((${$width}px + ${Spacers.XXS} * 2) / 2 - 10px)`};
        margin-left: 2px;
        border-width: 5px;
        border-style: solid;
        border-color: ${({ theme }) =>
                theme === ThemeDark
                    ? Overlays.Plain.White80
                    : Overlays.Plain.Black80}
            transparent transparent transparent;
        opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
        visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
        z-index: 1;
        transition: ${Transitions.Short};
        position: absolute;
    }
`

setDefaultTheme([StyledButtonIcon, TooltipContainer, Tip])

export { StyledButtonIcon, TooltipContainer, Tip }
