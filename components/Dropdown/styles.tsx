/*=============================================== Dropdown styles ===============================================*/

import styled, { css } from "styled-components"

import {
    Radiuses,
    Shadows,
    Transitions,
    Spacers,
    Breakpoints,
    Mixins,
    stringifyPx,
} from "../../"
import type { ColorsHoverTypes } from "../../types"
import type { DropdownJustifyTypes } from "./types"
import type { ListDirectionTypes } from "../ListInputs/types"

import setDefaultTheme from "../../utils/setDefaultTheme"

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

    a,
    button {
        color: ${({ $accentColor, theme }) =>
            theme.ColorsHoverDefault({ $color: $accentColor })};
        text-decoration: none;
        text-align: left;
        background-color: transparent;
        border: none;
        padding: ${Spacers.XS} ${Spacers.S};
        transition: ${Transitions.Short};

        @media ${Breakpoints.Hover} {
            &:hover {
                background-color: ${({ $accentColor, theme }) =>
                    theme.ColorsHoverHover({ $color: $accentColor })};
                color: ${({ $accentColor, theme }) =>
                    $accentColor === "white"
                        ? theme.Primary500
                        : theme.Background};
            }

            &:active {
                background-color: ${({ $accentColor, theme }) =>
                    theme.ColorsHoverActive({ $color: $accentColor })};
            }
        }
    }
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

setDefaultTheme([DropdownContainer, StyledDropdown])

export { DropdownContainer, StyledDropdown }
