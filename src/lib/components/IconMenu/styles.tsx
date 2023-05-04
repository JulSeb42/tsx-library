/*=============================================== IconMenu styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins, Radiuses, Spacers, Transitions } from "../../"
import { PlusIcon } from "../../icons"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

export const ICON_MENU_BUTTON_SIZE = 48

const StyledIconMenu = styled.nav`
    position: relative;
    width: ${ICON_MENU_BUTTON_SIZE}px;
    height: ${ICON_MENU_BUTTON_SIZE}px;
`

const BaseOpenButton = styled.button`
    width: ${ICON_MENU_BUTTON_SIZE}px;
    height: ${ICON_MENU_BUTTON_SIZE}px;
    border: none;
    border-radius: ${Radiuses.Circle};
    position: relative;
    z-index: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

const StyledOpenButton = styled(BaseOpenButton)<{ $color?: ColorsHoverTypes }>`
    background-color: ${({ $color, theme }) =>
        theme.ColorsHoverDefault({ $color: $color })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverHover({ $color: $color })};
        }

        &:active {
            background-color: ${({ $color, theme }) =>
                theme.ColorsHoverActive({ $color: $color })};
        }
    }
`

const BaseButton = styled.button`
    width: ${ICON_MENU_BUTTON_SIZE}px;
    height: ${ICON_MENU_BUTTON_SIZE}px;
    border: none;
    border-radius: ${Radiuses.Circle};
    position: absolute;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}

    &[data-direction="left"] {
        top: 0;
        right: 0;

        &.open {
            right: calc(var(--button-position-open) + ${Spacers.XS});
        }
    }

    &[data-direction="right"] {
        top: 0;
        left: 0;

        &.open {
            left: calc(var(--button-position-open) + ${Spacers.XS});
        }
    }

    &[data-direction="up"] {
        bottom: 0;
        left: 0;

        &.open {
            bottom: calc(var(--button-position-open) + ${Spacers.XS});
        }
    }

    &[data-direction="down"] {
        left: 0;
        top: 0;

        &.open {
            top: calc(var(--button-position-open) + ${Spacers.XS});
        }
    } /* 
    text-decoration: none;
    
    

   

   

    */
`

const StyledButton = styled(BaseButton)<{ $color?: ColorsHoverTypes }>`
    background-color: ${({ theme }) => theme.Background};
    color: ${({ $color, theme }) =>
        $color === "white"
            ? theme.Primary500
            : theme.ColorsHoverDefault({ $color: $color })};
    transition: ${Transitions.Short};

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

const StyledIconPlus = styled(PlusIcon)`
    transition: ${Transitions.Short};

    &.open {
        transform: rotate(45deg);
    }
`

setDefaultTheme([
    StyledIconMenu,
    StyledOpenButton,
    StyledButton,
    StyledIconPlus,
])

export { StyledIconMenu, StyledOpenButton, StyledButton, StyledIconPlus }
