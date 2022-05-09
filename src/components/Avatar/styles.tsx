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
        props.background === "primary"
            ? Variables.Colors.Primary500
            : props.background === "secondary"
            ? Variables.Colors.Secondary500
            : props.background === "success"
            ? Variables.Colors.Success500
            : props.background === "danger"
            ? Variables.Colors.Danger500
            : props.background === "warning"
            ? Variables.Colors.Warning500
            : props.background === "white"
            ? Variables.Colors.White
            : props.background};
    color: ${props =>
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
    font-weight: ${Variables.FontWeights.Black};
`

export { Container }
