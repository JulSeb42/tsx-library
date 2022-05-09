// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const Hr = styled.hr<props>`
    border: none;
    width: 100%;
    height: ${props => (props.height ? props.height : 1)}px;
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
            : props.color === "black"
            ? Variables.Colors.Black
            : props.color === "gray"
            ? Variables.Colors.Gray200
            : props.color};
    margin: 0;
`

Hr.defaultProps = {
    color: "gray",
}

export default Hr
