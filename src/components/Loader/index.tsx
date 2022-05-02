// Packages
import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const Loader = styled.span<props>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: ${props => props.border}px solid
        ${props =>
            props.backgroundColor === "primary"
                ? Variables.Colors.Primary500
                : props.backgroundColor === "secondary"
                ? Variables.Colors.Secondary500
                : props.backgroundColor === "success"
                ? Variables.Colors.Success500
                : props.backgroundColor === "danger"
                ? Variables.Colors.Danger500
                : props.backgroundColor === "warning"
                ? Variables.Colors.Warning500
                : props.backgroundColor === "white"
                ? Variables.Colors.White
                : props.backgroundColor};
    border-bottom-color: ${props =>
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
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${Rotation} 1s linear infinite;

    ${props =>
        (props.marginLeft || props.marginRight) &&
        css`
            margin-left: ${props.marginLeft};
            margin-right: ${props.marginRight};
        `}
`

Loader.defaultProps = {
    size: 48,
    border: 2,
    backgroundColor: Variables.Colors.White,
    color: Variables.Colors.Primary500,
}

export default Loader
