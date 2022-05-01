// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Container = styled.button<styleProps>`
    border: 1px solid transparent;
    background: none;
    padding: ${props =>
        props.noPadding ? 0 : `${Variables.Spacers.XS} ${Variables.Spacers.S}`};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    border-radius: ${Variables.Radiuses.M};
    line-height: ${Variables.LineHeight};
    transition: ${Variables.Transitions.Short};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;

    .icon-left {
        margin-right: ${Variables.Spacers.XXS};
        height: 100%;
    }

    .icon-right {
        margin-left: ${Variables.Spacers.XXS};
        height: 100%;
    }

    ${props =>
        props.btnStyle === "plain" &&
        css`
            background-color: ${props.color === "primary"
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

            color: ${props.color === "white"
                ? Variables.Colors.Primary500
                : Variables.Colors.White};

            &:hover {
                background-color: ${props.color === "primary"
                    ? Variables.Colors.Primary300
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary300
                    : props.color === "success"
                    ? Variables.Colors.Success300
                    : props.color === "danger"
                    ? Variables.Colors.Danger300
                    : props.color === "warning"
                    ? Variables.Colors.Warning300
                    : props.color === "white"
                    ? Variables.Colors.Gray100
                    : props.colorHover};
            }

            &:active {
                background-color: ${props.color === "primary"
                    ? Variables.Colors.Primary600
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary600
                    : props.color === "success"
                    ? Variables.Colors.Success600
                    : props.color === "danger"
                    ? Variables.Colors.Danger600
                    : props.color === "warning"
                    ? Variables.Colors.Warning600
                    : props.color === "white"
                    ? Variables.Colors.Gray300
                    : props.colorActive};
            }

            &:disabled {
                background-color: ${Variables.Colors.Gray100};
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${props =>
        props.btnStyle === "text" &&
        css`
            color: ${props.color === "primary"
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

            &:hover {
                color: ${props.color === "primary"
                    ? Variables.Colors.Primary300
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary300
                    : props.color === "success"
                    ? Variables.Colors.Success300
                    : props.color === "danger"
                    ? Variables.Colors.Danger300
                    : props.color === "warning"
                    ? Variables.Colors.Warning300
                    : props.color === "white"
                    ? Variables.Colors.Gray100
                    : props.colorHover};
            }

            &:active {
                color: ${props.color === "primary"
                    ? Variables.Colors.Primary600
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary600
                    : props.color === "success"
                    ? Variables.Colors.Success600
                    : props.color === "danger"
                    ? Variables.Colors.Danger600
                    : props.color === "warning"
                    ? Variables.Colors.Warning600
                    : props.color === "white"
                    ? Variables.Colors.Gray300
                    : props.colorActive};
            }

            &:disabled {
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${props =>
        props.btnStyle === "outline" &&
        css`
            border-color: ${props.color === "primary"
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

            color: ${props.color === "primary"
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

            &:hover {
                border-color: ${props.color === "primary"
                    ? Variables.Colors.Primary300
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary300
                    : props.color === "success"
                    ? Variables.Colors.Success300
                    : props.color === "danger"
                    ? Variables.Colors.Danger300
                    : props.color === "warning"
                    ? Variables.Colors.Warning300
                    : props.color === "white"
                    ? Variables.Colors.Gray100
                    : props.colorHover};

                color: ${props.color === "primary"
                    ? Variables.Colors.Primary300
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary300
                    : props.color === "success"
                    ? Variables.Colors.Success300
                    : props.color === "danger"
                    ? Variables.Colors.Danger300
                    : props.color === "warning"
                    ? Variables.Colors.Warning300
                    : props.color === "white"
                    ? Variables.Colors.Gray100
                    : props.colorHover};
            }

            &:active {
                border-color: ${props.color === "primary"
                    ? Variables.Colors.Primary600
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary600
                    : props.color === "success"
                    ? Variables.Colors.Success600
                    : props.color === "danger"
                    ? Variables.Colors.Danger600
                    : props.color === "warning"
                    ? Variables.Colors.Warning600
                    : props.color === "white"
                    ? Variables.Colors.Gray300
                    : props.colorActive};

                color: ${props.color === "primary"
                    ? Variables.Colors.Primary600
                    : props.color === "secondary"
                    ? Variables.Colors.Secondary600
                    : props.color === "success"
                    ? Variables.Colors.Success600
                    : props.color === "danger"
                    ? Variables.Colors.Danger600
                    : props.color === "warning"
                    ? Variables.Colors.Warning600
                    : props.color === "white"
                    ? Variables.Colors.Gray300
                    : props.colorActive};
            }

            &:disabled {
                border-color: ${Variables.Colors.Gray500};
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${props =>
        props.justify &&
        css`
            justify-self: ${props.justify};
        `}
`

export { Container }
