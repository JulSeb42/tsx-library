/*=============================================== Dropdown styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    Shadows,
    Transitions,
    Breakpoints,
    Mixins,
    stringifyPx,
} from "../../"
import type { ColorsHoverTypes, PaddingTypes, SpacersTypes } from "../../types"
import type { DropdownJustifyTypes } from "./types"
import type { ListDirectionTypes } from "../ListInputs/types"

import { setDefaultTheme } from "../../utils"

const StyledDropdown = styled.div<{
    $isOpen: boolean
    $accentColor?: ColorsHoverTypes
    $direction?: ListDirectionTypes
    $maxHeightOpen: number
}>`
    position: absolute;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    min-width: 200px;
    background-color: ${({ theme }) => theme.Background};
    border-radius: ${Radiuses.M};
    overflow-y: scroll;
    box-shadow: ${({ $isOpen }) => $isOpen && Shadows.M};
    transition: ${Transitions.Short};
    z-index: 50;
    ${Mixins.HideScrollbar};
    max-height: ${({ $isOpen, $maxHeightOpen }) =>
        $isOpen ? stringifyPx($maxHeightOpen) : 0};

    ${({ $direction }) =>
        $direction === "up"
            ? css`
                  bottom: 42px;
              `
            : css`
                  top: 42px;
              `}
`

const DropdownContainer = styled.div<{ $justify?: DropdownJustifyTypes }>`
    position: relative;
    ${({ $justify }) =>
        Mixins.Flexbox({
            $justifyContent: $justify === "right" ? "flex-end" : "flex-start",
        })};

    ${StyledDropdown} {
        left: ${({ $justify }) => $justify === "left" && 0};
        right: ${({ $justify }) => $justify === "right" && 0};
    }
`

const DropdownItem = styled.button<{
    $color?: ColorsHoverTypes
    $padding?: PaddingTypes
    $gap?: SpacersTypes
}>`
    color: ${({ $color, theme }) => theme.ColorsHoverDefault({ $color })};
    text-decoration: none;
    text-align: left;
    background-color: transparent;
    border: none;
    ${Mixins.Padding};
    transition: ${Transitions.Short};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $gap,
        })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverHover({ $color })};
            color: ${({ $color, theme }) =>
                $color === "white" ? theme.Primary500 : theme.Background};
        }

        &:active {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverActive({ $color })};
        }
    }
`

setDefaultTheme([DropdownContainer, StyledDropdown, DropdownItem])

export { DropdownContainer, StyledDropdown, DropdownItem }
