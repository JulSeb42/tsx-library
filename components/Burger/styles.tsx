/*=============================================== Burger styles ===============================================*/

import styled, { css } from "styled-components"

import { Breakpoints, Radiuses, Transitions } from "../../Variables"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ColorsHoverTypes } from "../../utils/common-types"

const StyledBurger = styled.button<{
    $isOpen: boolean
    $color?: ColorsHoverTypes
    $width?: number
    $height?: number
    $noHover?: boolean
    $borderWidth?: number
}>`
    position: relative;
    border: none;
    background-color: transparent;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    color: ${({ theme }) => theme.ColorsHoverDefault};

    ${({ $noHover }) =>
        !$noHover &&
        css`
            @media ${Breakpoints.Hover} {
                &:hover {
                    color: ${({ theme }) => theme.ColorsHoverHover};
                }

                &:active {
                    color: ${({ theme }) => theme.ColorsHoverActive};
                }
            }
        `}

    span {
        display: block;
        width: 100%;
        height: ${({ $borderWidth }) => $borderWidth}px;
        border-radius: ${Radiuses.Round};
        position: absolute;
        left: 0;
        background-color: currentColor;
        transition: ${Transitions.Short};

        &:first-child {
            top: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            transform: ${({ $isOpen }) => $isOpen && "rotate(45deg)"};
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
            width: ${({ $isOpen }) => $isOpen && 0};
        }

        &:last-child {
            bottom: ${({ $isOpen }) => ($isOpen ? "45%" : 0)};
            transform: ${({ $isOpen }) => $isOpen && "rotate(-45deg)"};
        }
    }
`

setDefaultTheme([StyledBurger])

export { StyledBurger }
