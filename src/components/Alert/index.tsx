// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Grid from "../Grid"
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const Alert = styled(Grid)<props>`
    padding: ${Variables.Spacers.S};
    gap: ${Variables.Spacers.S};
    background-color: ${props =>
        props.color === "primary"
            ? Variables.Colors.Primary50
            : props.color === "secondary"
            ? Variables.Colors.Secondary50
            : props.color === "success"
            ? Variables.Colors.Success50
            : props.color === "danger"
            ? Variables.Colors.Danger50
            : props.color === "warning"
            ? Variables.Colors.Warning50
            : props.color === "white"
            ? Variables.Colors.White
            : props.color};
    border: 1px solid
        ${props =>
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
                : props.borderColor};
    border-radius: ${Variables.Radiuses.M};

    ${props =>
        props.modal &&
        css`
            min-width: 400px;

            @media ${Variables.Breakpoints.Mobile} {
                min-width: inherit;
                width: 90vw;
            }
        `}
`

Alert.defaultProps = {
    color: "success",
    borderColor: "success",
}

export default Alert
