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
import type {
    SpacersTypes,
    PositionsTypes,
    ColorsHoverTypes,
    ShadowsTypes,
    RadiusesTypes,
} from "../../types"
import type {
    ButtonIconVariantTypes,
    ButtonIconLabelDirectionsTypes,
} from "./types"

import { setDefaultTheme } from "../../utils"

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
    $isAvatar?: boolean
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
        $variant === "plain"
            ? theme.ColorsHoverDefault
            : $variant === "ghost"
            ? theme.ColorsGhostDefault
            : "transparent"};
    color: ${({ $variant, $color, theme }) =>
        $variant === "plain"
            ? $color === "white"
                ? theme.Primary500
                : $color === "background"
                ? theme.Font
                : theme.Background
            : $variant === "ghost"
            ? $color === "white" || $color === "background"
                ? theme.Primary500
                : $color === "font"
                ? theme.Background
                : theme.ColorsHoverDefault
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
            background-color: ${({ $variant, theme, $hoverBackground }) =>
                $variant === "plain"
                    ? theme.ColorsHoverHover
                    : $variant === "ghost"
                    ? theme.ColorsGhostHover
                    : $variant === "transparent" &&
                      $hoverBackground &&
                      theme.Gray50};
            color: ${({ $variant, theme }) =>
                $variant === "transparent" && theme.ColorsHoverHover};
        }

        &:not(:disabled):active {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain"
                    ? theme.ColorsHoverActive
                    : $variant === "ghost" && theme.ColorsGhostActive};
            color: ${({ $variant, theme }) =>
                $variant === "transparent" && theme.ColorsHoverActive};
        }

        ${({ $isAvatar }) =>
            $isAvatar &&
            css`
                &:not(:disabled):hover {
                    opacity: 0.8;
                }

                &:not(:disabled):active {
                    opacity: 0.6;
                }
            `}
    }

    &:disabled {
        background-color: ${({ $variant, theme }) =>
            $variant === "plain"
                ? theme.Gray100
                : $variant === "ghost"
                ? theme.Gray50
                : ""};
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
    $position?: ButtonIconLabelDirectionsTypes
}>`
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
    left: ${({ $width }) => `calc(50% - ${$width}px / 2 - 2px)`};

    &:after {
        content: "";
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
        left: ${({ $width }) =>
            `calc((${$width}px + ${Spacers.XXS} * 2) / 2 - 10px)`};

        ${
            "" /* ${({ $position }) =>
            $position === "down"
                ? css`
                      top: calc(${Spacers.XS} * -1 - 2px);
                  `
                : css`
                      bottom: calc(${Spacers.XS} * -1 - 2px);
                  `} */
        }
    }

    ${({ $position, $bottom }) =>
        $position === "down"
            ? css`
                  top: ${$bottom && stringifyPx($bottom)};

                  &:after {
                      top: calc(${Spacers.XS} * -1 - 2px);
                      transform: rotate(180deg);
                  }
              `
            : css`
                  bottom: ${$bottom && stringifyPx($bottom)};

                  &:after {
                      bottom: calc(${Spacers.XS} * -1 - 2px);
                  }
              `}
`

setDefaultTheme([StyledButtonIcon, TooltipContainer, Tip])

export { StyledButtonIcon, TooltipContainer, Tip }
