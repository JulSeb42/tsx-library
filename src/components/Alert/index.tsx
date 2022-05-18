// Imports
import styled, { css } from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Grid from "../Grid"
import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const Alert = styled(Grid)<props>`
    padding: ${({ padding }) =>
        padding ? stringifyPx(padding) : Variables.Spacers.S};
    ${Mixins.Gap};
    color: ${Variables.Colors.Black};
    background-color: ${({ color }) =>
        color === "primary"
            ? Variables.Colors.Primary50
            : color === "secondary"
            ? Variables.Colors.Secondary50
            : color === "success"
            ? Variables.Colors.Success50
            : color === "danger"
            ? Variables.Colors.Danger50
            : color === "warning"
            ? Variables.Colors.Warning50
            : color === "white"
            ? Variables.Colors.White
            : color === "gray"
            ? Variables.Colors.Gray50
            : color};
    border: 1px solid
        ${({ color, borderColor }) =>
            color === "primary"
                ? Variables.Colors.Primary500
                : color === "secondary"
                ? Variables.Colors.Secondary500
                : color === "success"
                ? Variables.Colors.Success500
                : color === "danger"
                ? Variables.Colors.Danger500
                : color === "warning"
                ? Variables.Colors.Warning500
                : color === "white"
                ? Variables.Colors.White
                : color === "gray"
                ? Variables.Colors.Gray500
                : borderColor};
    ${Mixins.Radius};

    ${({ modal }) =>
        modal &&
        css`
            min-width: 400px;

            @media ${Variables.Breakpoints.Mobile} {
                min-width: inherit;
                width: 90vw;
            }
        `}
`

Alert.defaultProps = {
    color: "danger",
    gap: "s",
    radius: "m",
}

export default Alert
