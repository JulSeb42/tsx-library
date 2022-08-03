/*=============================================== Dropdown ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Flexbox from "./Flexbox"

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    position: absolute;
    top: 42px;
    ${Mixins.Grid({})};
    min-width: 200px;
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    box-shadow: ${Variables.Shadows.M};
    max-height: ${({ $isOpen }) => ($isOpen ? "800px" : 0)};
    transition: ${Variables.Transitions.Long};
    z-index: 50;

    a,
    button {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        text-align: left;
        background-color: transparent;
        border: none;
        padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
        transition: ${Variables.Transitions.Short};

        @media ${Variables.Breakpoints.Hover} {
            &:hover {
                background-color: ${Variables.Colors.Primary300};
                color: ${Variables.Colors.White};
            }

            &:active {
                background-color: ${Variables.Colors.Primary600};
                color: ${Variables.Colors.White};
            }
        }
    }
`

const StyledContainer = styled(Flexbox)<StyleContainerProps>`
    position: relative;

    ${Container} {
        left: ${({ $justify }) => $justify === "left" && 0};
        right: ${({ $justify }) => $justify === "right" && 0};
    }
`

/*==================== Component ====================*/

const DropdownContainer = ({ justify = "left", children, ...props }: ContainerProps) => (
    <StyledContainer $justify={justify} justifyContent={justify === "right" ? "flex-end" : "flex-start"} {...props}>
        {children}
    </StyledContainer>
)

const Dropdown = ({ children, isOpen, ...props }: Props) => (
    <Container $isOpen={isOpen} {...props}>
        {children}
    </Container>
)

export { DropdownContainer, Dropdown }

/*==================== Types ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

type JustifyTypes = keyof typeof justify

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isOpen: boolean
    $justify?: JustifyTypes
}

interface StyleContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    $justify?: JustifyTypes
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    justify?: JustifyTypes
}
