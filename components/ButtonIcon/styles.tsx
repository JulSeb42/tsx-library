/*=============================================== ButtonIcon styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    Breakpoints,
    ThemeDark,
    Overlays,
    FontSizes,
    FontWeights,
    Transitions,
    Spacers,
} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    SpacersTypes,
    PositionsTypes,
} from "../../utils/common-types"

import { ButtonStylesProps } from "./types"

const StyledButtonIcon = styled.button<{
    $variant?: ButtonStylesProps
    $color?: ColorsHoverTypes
    $size?: number
    $hoverBackground?: boolean
    $shadow?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
    $position?: PositionsTypes
    $left?: string | number | SpacersTypes
    $top?: string | number | SpacersTypes
    $right?: string | number | SpacersTypes
    $bottom?: string | number | SpacersTypes
    $zIndex?: number
    $showLabel?: boolean
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Radiuses.Circle};
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
    ${Mixins.Shadow};

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
            ${({ $shadowHover }) => Mixins.Shadow({ $shadow: $shadowHover })};
        }

        &:not(:disabled):active {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain" && theme.ColorsHoverActive};
            color: ${({ $variant, theme }) =>
                $variant === "transparent" && theme.ColorsHoverActive};
            ${({ $shadowActive }) => Mixins.Shadow({ $shadow: $shadowActive })};
        }
    }

    &:disabled {
        background-color: ${({ $variant, theme }) =>
            $variant === "plain" && theme.Gray100};
        color: ${({ theme }) => theme.Gray500};
    }

    position: ${({ $position, $showLabel }) =>
        !$showLabel ? $position : "relative"};
    z-index: ${({ $zIndex, $showLabel }) => (!$showLabel ? $zIndex : 0)};

    ${({ $left, $showLabel }) =>
        !$showLabel &&
        $left &&
        css`
            left: ${Mixins.Spacers({ $spacer: $left })};
        `}

    ${({ $top, $showLabel }) =>
        !$showLabel &&
        $top &&
        css`
            top: ${Mixins.Spacers({ $spacer: $top })};
        `}

    ${({ $right, $showLabel }) =>
        !$showLabel &&
        $right &&
        css`
            right: ${Mixins.Spacers({ $spacer: $right })};
        `}

    ${({ $bottom, $showLabel }) =>
        !$showLabel &&
        $bottom &&
        css`
            bottom: ${Mixins.Spacers({ $spacer: $bottom })};
        `}
`

const TooltipContainer = styled.span<{
    $position?: PositionsTypes
    $left?: string | number | SpacersTypes
    $top?: string | number | SpacersTypes
    $right?: string | number | SpacersTypes
    $bottom?: string | number | SpacersTypes
    $zIndex?: number
    $size?: number
}>`
    position: ${({ $position }) => $position};
    z-index: ${({ $zIndex }) => $zIndex};
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;

    ${({ $left }) =>
        $left &&
        css`
            left: ${Mixins.Spacers({ $spacer: $left })};
        `}

    ${({ $top }) =>
        $top &&
        css`
            top: ${Mixins.Spacers({ $spacer: $top })};
        `}

    ${({ $right }) =>
        $right &&
        css`
            right: ${Mixins.Spacers({ $spacer: $right })};
        `}

    ${({ $bottom }) =>
        $bottom &&
        css`
            bottom: ${Mixins.Spacers({ $spacer: $bottom })};
        `}
`

const Tip = styled.span<{ $isVisible: boolean; $width: number }>`
    width: ${({ $width }) => $width}px;
    min-width: 60px;
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
    bottom: 125%;
    left: ${({ $width }) => `calc(50% - ${$width}px / 2 - 2px)`};

    &:after {
        content: "";
        bottom: calc(${Spacers.XS} * -1 - 2px);
        left: ${({ $width }) => `calc(${$width}px / 2 - 5px)`};
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
