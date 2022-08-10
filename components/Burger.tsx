/*=============================================== Burger ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { ColorsHoverTypes } from "./common-types"

/*==================== Component ====================*/

const Burger = ({
    isOpen,
    ariaLabel = `${isOpen ? "Close" : "Open"} burger`,
    color = "primary",
    width = 32,
    height = 24,
    ...props
}: Props) => (
    <StyledBurger
        $isOpen={isOpen}
        aria-label={ariaLabel}
        $color={color}
        $width={width}
        $height={height}
        {...props}
    >
        <span />
        <span />
        <span />
    </StyledBurger>
)

export default Burger

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $isOpen: boolean
    $color?: ColorsHoverTypes
    $width?: number
    $height?: number
}

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    ariaLabel?: string
    isOpen: boolean
    color?: ColorsHoverTypes
    width?: number
    height?: number
}

/*==================== Styles ====================*/

const StyledBurger = styled.button<StyleProps>`
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
