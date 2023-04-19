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
import type { ButtonIconLabelDirectionsTypes } from "./types"

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
    $color?: ColorsHoverTypes
}>`
    &.plain {
        background-color: ${({ theme, $color }) =>
            theme.ColorsHoverDefault({ $color })};
        color: ${({ $color, theme }) =>
            $color === "white"
                ? theme.Primary500
                : $color === "background"
                ? theme.Font
                : theme.Background};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:not(:disabled):active {
                background-color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &:disabled {
            background-color: ${({ theme }) => theme.Gray100};
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &.transparent {
        background-color: transparent;
        color: ${({ $color, theme }) => theme.ColorsHoverDefault({ $color })};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:not(:disabled):active {
                color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }

        &:disabled {
            color: ${({ theme }) => theme.Gray500};
        }
    }

    &.ghost {
        background-color: ${({ theme, $color }) =>
            theme.ColorsGhostDefault({ $color })};
        color: ${({ $color, theme }) =>
            $color === "white" || $color === "background"
                ? theme.Primary500
                : $color === "font"
                ? theme.Background
                : theme.ColorsHoverDefault({ $color })};

        @media ${Breakpoints.Hover} {
            &:not(:disabled):hover {
                background-color: ${({ $color, theme }) =>
                    theme.ColorsGhostHover({ $color })};
            }

            &:not(:disabled):active {
                background-color: ${({ $color, theme }) =>
                    theme.ColorsGhostActive({ $color })};
            }
        }

        &:disabled {
            background-color: ${({ theme }) => theme.Gray50};
            color: ${({ theme }) => theme.Gray500};
        }
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
    max-width: calc(var(--tip-width) + ${Spacers.XXS} * 2);
    left: calc(50% - var(--tip-width) / 2 - 2px);

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
        left: calc((var(--tip-width) + ${Spacers.XXS} * 2) / 2 - 10px);
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

const Tip = styled(BaseTip)<{
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
