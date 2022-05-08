// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.button<styleProps>`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    position: relative;
    background: none;
    border: none;
    padding: 0;

    span {
        transition: ${Variables.Transitions.Short};
        width: 100%;
        height: ${props => props.border}px;
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
                : props.color};
        position: absolute;
        left: 0;

        &:first-of-type {
            top: 0;
        }

        &:nth-of-type(2) {
            top: calc(50% - ${props => props.border}px / 2);
        }

        &:last-of-type {
            bottom: 0;
        }
    }

    ${props =>
        props.open &&
        css`
            span {
                &:first-of-type {
                    transform: rotate(45deg);
                    top: 45%;
                }

                &:nth-of-type(2) {
                    width: 0;
                }

                &:last-of-type {
                    transform: rotate(-45deg);
                    bottom: 45%;
                }
            }
        `}
`

export { Container }
