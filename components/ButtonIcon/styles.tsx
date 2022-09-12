/*=============================================== ButtonIcon styles ===============================================*/

import styled, { css } from "styled-components"

import { Radiuses, Breakpoints } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    SpacersTypes,
} from "../../utils/common-types"

import { ButtonStylesProps } from "./types"
import { PositionsTypes } from "../Header/types"

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
        $variant === "plain" && $color === "white"
            ? theme.Primary500
            : $variant === "plain" && $color !== "white"
            ? theme.Background
            : $variant === "transparent" && theme.ColorsHoverDefault};
    ${Mixins.Shadow};
    position: ${({ $position }) => $position};
    z-index: ${({ $zIndex }) => $zIndex};

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

    @media ${Breakpoints.Hover} {
        &:hover {
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

        &:active {
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
`

setDefaultTheme([StyledButtonIcon])

export { StyledButtonIcon }
