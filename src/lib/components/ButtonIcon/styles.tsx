/*=============================================== ButtonIcon styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Breakpoints,
    FontSizes,
    FontWeights,
    Mixins,
    Overlays,
    Radiuses,
    Spacers,
    ThemeDark,
    Transitions,
    stringifyPx,
} from "../../"
import type { ColorsHoverTypes } from "../../types"
import type {
    ButtonIconLabelDirectionsTypes,
    ButtonIconVariantTypes,
} from "./types"

import { setDefaultTheme } from "../../utils"

const BaseButtonIcon = styled.button`
    width: var(--button-size, 48px);
    height: var(--button-size, 48px);
    border-radius: ${Radiuses.Circle};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    padding: 0;
    border: none;
    text-decoration: none;
    position: relative;
    z-index: 1;
`

const StyledButtonIcon = styled(BaseButtonIcon)<{
    $variant?: ButtonIconVariantTypes
    $color?: ColorsHoverTypes
}>`
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

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain"
                    ? theme.ColorsHoverHover
                    : $variant === "ghost" && theme.ColorsGhostHover};
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
    }

    &:disabled {
        background-color: ${({ $variant, theme }) =>
            $variant === "plain"
                ? theme.Gray100
                : $variant === "ghost" && theme.Gray50};
        color: ${({ theme }) => theme.Gray500};
    }
`

const TooltipContainer = styled.span`
    position: relative;
    width: var(--button-size, 48px);
    height: var(--button-size, 48px);
`

const BaseTip = styled.span`
    min-width: 60px;
    text-align: center;
    padding: ${Spacers.XXS};
    border-radius: ${Radiuses.S};
    font-size: ${FontSizes.Small};
    font-weight: ${FontWeights.Regular};
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    transition: ${Transitions.Short};
    position: absolute;
    color: ${({ theme }) => theme.Background};
    background-color: ${({ theme }) =>
        theme === ThemeDark ? Overlays.Plain.White80 : Overlays.Plain.Black80};

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
        opacity: 0;
        visibility: hidden;
        z-index: 1;
        transition: ${Transitions.Short};
        position: absolute;
    }

    &.visible {
        opacity: 1;
        visibility: visible;

        &:after {
            opacity: 1;
            visibility: visible;
        }
    }
`

const TipSize = styled(BaseTip)<{ $width: number }>`
    max-width: ${({ $width }) => `calc(${$width} + ${Spacers.XXS} * 2)`};
    left: ${({ $width }) => `calc(50% - ${$width}px / 2 - 2px)`};

    &:after {
        left: ${({ $width }) =>
            `calc((${$width}px + ${Spacers.XXS} * 2) / 2 - 10px)`};
    }
`

const Tip = styled(TipSize)<{
    $bottom?: string | number
    $position?: ButtonIconLabelDirectionsTypes
}>`
    ${({ $position, $bottom }) =>
        $position === "bottom"
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
