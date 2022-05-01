// Packages
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "./Variables"

// Types
interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    width?: number
    height?: number
    border?: number
    color?: string
    open: boolean
}

interface props extends styleProps {
    ariaLabel?: string
    onClick: (event: React.MouseEvent<HTMLElement>) => void
    open: boolean
}

// Styles
const Container = styled.button<styleProps>`
    width: ${props => `${props.width || 32}px`};
    height: ${props => `${props.height || 24}px`};
    position: relative;
    background: none;
    border: none;
    padding: 0;

    span {
        transition: ${Variables.Transitions.Short};
        width: 100%;
        height: ${props => `${props.border || 2}px`};
        background-color: ${props =>
            props.color === "primary"
                ? Variables.Colors.Primary500
                : props.color === "secondary"
                ? Variables.Colors.Secondary500
                : props.color === "success"
                ? Variables.Colors.Success500
                : props.color === "danger"
                ? Variables.Colors.Danger500
                : props.color === "warning"
                ? Variables.Colors.Warning500
                : props.color === "white"
                ? Variables.Colors.White
                : props.color || Variables.Colors.Primary500};
        position: absolute;
        left: 0;

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - ${props => `${props.border || 2}px`} / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    ${props =>
        props.open &&
        css`
            span {
                &:first-child {
                    transform: rotate(45deg);
                    top: 45%;
                }

                &:nth-child(2) {
                    width: 0;
                }

                &:last-child {
                    transform: rotate(-45deg);
                    bottom: 45%;
                }
            }
        `}
`

const Burger: React.FC<props> = props => {
    return (
        <Container
            width={props.width}
            height={props.height}
            color={props.color}
            border={props.border}
            aria-label={props.ariaLabel || "Menu button"}
            {...props}
        >
            <span />
            <span />
            <span />
        </Container>
    )
}

export default Burger
