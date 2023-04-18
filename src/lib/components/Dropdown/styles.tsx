/*=============================================== Dropdown styles ===============================================*/

import styled from "styled-components"

import {
    Breakpoints,
    Flexbox,
    Mixins,
    Radiuses,
    Shadows,
    Spacers,
    Transitions,
} from "../../"

import { setDefaultTheme } from "../../utils"

const StyledDropdown = styled.div`
    position: absolute;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
    })};
    min-width: 200px;
    background-color: ${({ theme }) => theme.Background};
    border-radius: ${Radiuses.M};
    overflow-y: scroll;
    transition: ${Transitions.Short};
    z-index: 50;
    ${Mixins.HideScrollbar};
    max-height: 0;

    &.open {
        box-shadow: ${Shadows.M};
        max-height: 144px;
    }

    &[data-direction="up"] {
        bottom: 42px;
    }

    &[data-direction="down"] {
        top: 42px;
    }
`

const DropdownContainer = styled(Flexbox)`
    position: relative;

    &.justify-left {
        ${StyledDropdown} {
            left: 0;
        }
    }

    &.justify-right {
        ${StyledDropdown} {
            right: 0;
        }
    }
`

const DropdownItem = styled.button`
    color: ${({ theme }) => theme.ColorsHoverDefault({ $color: "primary" })};
    text-decoration: none;
    text-align: left;
    background-color: transparent;
    border: none;
    padding: ${Spacers.XS} ${Spacers.S};
    transition: ${Transitions.Short};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ theme }) =>
                theme.ColorsHoverHover({ $color: "primary" })};
            color: ${({ theme }) => theme.Background};
        }

        &:active {
            background-color: ${({ theme }) =>
                theme.ColorsHoverActive({ $color: "primary" })};
        }
    }
`

setDefaultTheme([DropdownContainer, StyledDropdown, DropdownItem])

export { DropdownContainer, StyledDropdown, DropdownItem }
