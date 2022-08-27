/*=============================================== Burger styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsHoverTypes } from "../../utils/common-types"

const StyledBurger = styled.button<{
    $isOpen: boolean
    $color?: ColorsHoverTypes
    $width?: number
    $height?: number
}>`
    position: relative;
    border: none;
    background-color: transparent;
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    color: ${Mixins.ColorsHoverDefault};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            color: ${Mixins.ColorsHoverHover};
        }

        &:active {
            color: ${Mixins.ColorsHoverActive};
        }
    }

    span {
        display: block;
        width: 100%;
        height: 2px;
        border-radius: ${Variables.Radiuses.Round};
        position: absolute;
        left: 0;
        background-color: currentColor;
        transition: ${Variables.Transitions.Short};

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

export { StyledBurger }
