/*=============================================== IconMenu styles ===============================================*/

import styled, { css } from "styled-components"

import { Breakpoints, Mixins, Radiuses, Transitions } from "../../"
import { PlusIcon } from "../../icons"
import type {
    ColorsHoverTypes,
    ObjectPositionTypes,
    ShadowsTypes,
    SpacersTypes,
} from "../../types"
import type { IconMenuDirectionTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledIconMenu = styled.div<{
    $position?: ObjectPositionTypes
    $buttonSize: number
}>`
    ${({ $position }) =>
        Mixins.Position({
            $position: $position?.position || "relative",
            $left: $position?.left,
            $top: $position?.top,
            $right: $position?.right,
            $bottom: $position?.bottom,
            $zIndex: $position?.zIndex,
        })};

    width: ${({ $buttonSize }) => $buttonSize}px;
    height: ${({ $buttonSize }) => $buttonSize}px;
`

const StyledOpenButton = styled.button<{
    $color?: ColorsHoverTypes
    $shadowDefault?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
    $buttonSize: number
}>`
    width: ${({ $buttonSize }) => $buttonSize}px;
    height: ${({ $buttonSize }) => $buttonSize}px;
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

const ButtonPosition = ({
    $isOpen,
    $index,
    $buttonSize,
    $gap,
}: {
    $isOpen: boolean
    $index: number
    $buttonSize: number
    $gap: SpacersTypes
}) =>
    css`
        ${$isOpen
            ? `calc(${
                  ($index + 1) * $buttonSize
              }px + var(--icon-menu-position-open) * ${$index + 1})`
            : 0}
    `

const StyledButton = styled.button<{
    $color?: ColorsHoverTypes
    $direction?: IconMenuDirectionTypes
    $isOpen: boolean
    $index: number
    $buttonSize: number
    $gap: SpacersTypes
}>`
    width: ${({ $buttonSize }) => $buttonSize}px;
    height: ${({ $buttonSize }) => $buttonSize}px;
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

    ${({ $direction, $isOpen, $index, $buttonSize, $gap }) =>
        $direction === "left"
            ? css`
                  top: 0;
                  left: ${ButtonPosition({
                      $buttonSize,
                      $gap,
                      $index,
                      $isOpen,
                  })};
              `
            : $direction === "up"
            ? css`
                  bottom: ${ButtonPosition({
                      $buttonSize,
                      $gap,
                      $index,
                      $isOpen,
                  })};
                  left: 0;
              `
            : $direction === "right"
            ? css`
                  top: 0;
                  right: ${ButtonPosition({
                      $buttonSize,
                      $gap,
                      $index,
                      $isOpen,
                  })};
              `
            : $direction === "down" &&
              css`
                  left: 0;
                  top: ${ButtonPosition({
                      $buttonSize,
                      $gap,
                      $index,
                      $isOpen,
                  })};
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
