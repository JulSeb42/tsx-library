/*=============================================== IconMenu styles ===============================================*/

import styled, { css } from "styled-components"

import { Radiuses, Breakpoints, Spacers, Transitions } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"
import PlusIcon from "../../icons/PlusIcon"

import {
    ColorsHoverTypes,
    ShadowsTypes,
    SpacersTypes,
} from "../../utils/common-types"
import { PositionsTypes } from "../Header/types"

const buttonSize = 48

const StyledIconMenu = styled.div<{
    $position?: PositionsTypes
    $zIndex?: number
    $left?: string | number | SpacersTypes
    $top?: string | number | SpacersTypes
    $right?: string | number | SpacersTypes
    $bottom?: string | number | SpacersTypes
    ref?: any
}>`
    position: ${({ $position }) => $position};
    z-index: ${({ $zIndex }) => $zIndex};
    width: ${buttonSize}px;
    height: ${buttonSize}px;
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

const StyledOpenButton = styled.button<{
    $color?: ColorsHoverTypes
    $shadowDefault?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
}>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border: none;
    border-radius: ${Radiuses.Circle};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    background-color: ${({ $color, theme }) =>
        theme.ColorsHoverDefault({ $color: $color })};
    position: relative;
    z-index: 1;
    ${({ $shadowDefault }) =>
        $shadowDefault && Mixins.Shadow({ $shadow: $shadowDefault })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverHover({ $color: $color })};
            ${({ $shadowHover }) =>
                $shadowHover && Mixins.Shadow({ $shadow: $shadowHover })};
        }

        &:active {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverActive({ $color: $color })};
            ${({ $shadowActive }) =>
                $shadowActive && Mixins.Shadow({ $shadow: $shadowActive })};
        }
    }
`

const StyledButton = styled.button<{
    $color?: ColorsHoverTypes
    $isOpen?: boolean
    $index: number
    $direction?: "left" | "up" | "right" | "down"
}>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border: none;
    border-radius: ${Radiuses.Circle};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: absolute;
    background-color: ${({ theme }) => theme.Background};
    color: ${({ $color, theme }) =>
        $color === "white"
            ? theme.Primary500
            : theme.ColorsHoverDefault({ $color: $color })};
    transition: ${({ $direction }) =>
                $direction === "up"
                    ? "bottom"
                    : $direction === "down"
                    ? "top"
                    : $direction}
            calc(${({ $index }) => $index + 1} * 0.2s) ease,
        background-color 0.2s ease, color 0.2s ease;
    text-decoration: none;

    ${({ $direction, $isOpen, $index }) =>
        $direction === "left"
            ? css`
                  top: 0;
                  left: ${$isOpen
                      ? `calc(${($index + 1) * buttonSize}px + ${
                            Spacers.XS
                        } * ${$index + 1})`
                      : 0};
              `
            : $direction === "up"
            ? css`
                  bottom: ${$isOpen
                      ? `calc(${($index + 1) * buttonSize}px + ${
                            Spacers.XS
                        } * ${$index + 1})`
                      : 0};
                  left: 0;
              `
            : $direction === "right"
            ? css`
                  top: 0;
                  right: ${$isOpen
                      ? `calc(${($index + 1) * buttonSize}px + ${
                            Spacers.XS
                        } * ${$index + 1})`
                      : 0};
              `
            : $direction === "down" &&
              css`
                  top: ${$isOpen
                      ? `calc(${($index + 1) * buttonSize}px + ${
                            Spacers.XS
                        } * ${$index + 1})`
                      : 0};
                  left: 0;
              `}

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme, $color }) =>
                theme.ColorsHoverHover({ $color: $color })};
            color: ${({ theme }) => theme.Background};
        }

        &:active {
            background-color: ${({ theme, $color }) =>
                theme.ColorsHoverActive({ $color: $color })};
        }
    }
`

const StyledIconPlus = styled(PlusIcon)<{ $isOpen?: boolean }>`
    transform: ${({ $isOpen }) => $isOpen && "rotate(45deg)"};
    transition: ${Transitions.Short};
`

setDefaultTheme([
    StyledIconMenu,
    StyledOpenButton,
    StyledButton,
    StyledIconPlus,
])

export { StyledIconMenu, StyledOpenButton, StyledButton, StyledIconPlus }
