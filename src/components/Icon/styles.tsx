// Packages
import styled from "@emotion/styled"
import SVG from "react-inlinesvg"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled(SVG)<styleProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    fill: ${props =>
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
            : props.color === "black"
            ? Variables.Colors.Black
            : props.color === "gray"
            ? Variables.Colors.Gray500
            : props.color
            ? props.color
            : "currentColor"};

    path {
        fill: ${props =>
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
                : props.color === "black"
                ? Variables.Colors.Black
                : props.color === "gray"
                ? Variables.Colors.Gray500
                : props.color
                ? props.color
                : "currentColor"};
    }
`

export { Container }
