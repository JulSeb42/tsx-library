/*=============================================== Burger styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Radiuses, Transitions } from "../../"
import type { ColorsHoverTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const BaseBurger = styled.button`
    position: relative;
    border: none;
    background-color: transparent;
    width: var(--burger-width, 32px);
    height: var(--burger-height, 24px);

    span {
        display: block;
        width: 100%;
        height: var(--burger-border-height, 2px);
        border-radius: ${Radiuses.Round};
        position: absolute;
        left: 0;
        background-color: currentColor;
        transition: ${Transitions.Short};

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - var(--burger-border-height, 2px) / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    &.open span {
        &:first-child {
            top: 45%;
            transform: rotate(45deg);
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
            width: 0;
        }

        &:last-child {
            bottom: 45%;
            transform: rotate(-45deg);
        }
    }
`

const StyledBurger = styled(BaseBurger)<{
    $color?: ColorsHoverTypes
}>`
    color: ${({ theme, $color }) => theme.ColorsHoverDefault({ $color })};

    &:not(.no-hover) {
        @media ${Breakpoints.Hover} {
            &:hover {
                color: ${({ theme, $color }) =>
                    theme.ColorsHoverHover({ $color })};
            }

            &:active {
                color: ${({ theme, $color }) =>
                    theme.ColorsHoverActive({ $color })};
            }
        }
    }
`

setDefaultTheme([StyledBurger])

export { StyledBurger }
