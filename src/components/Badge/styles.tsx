// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.span<styleProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: calc(${props => props.size}px * 0.7);
    line-height: 100%;
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
            : props.textColor === "white"
            ? Variables.Colors.White
            : props.color};
    color: ${props =>
        props.textColor === "primary"
            ? Variables.Colors.Primary500
            : props.textColor === "secondary"
            ? Variables.Colors.Secondary500
            : props.textColor === "success"
            ? Variables.Colors.Success500
            : props.textColor === "danger"
            ? Variables.Colors.Danger500
            : props.textColor === "warning"
            ? Variables.Colors.Warning500
            : props.textColor === "white"
            ? Variables.Colors.White
            : props.textColor};
    font-weight: ${Variables.FontWeights.Black};
`

export { Container }
