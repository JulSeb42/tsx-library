// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled.button<styleProps>`
    border: 1px solid transparent;
    background: none;
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    padding: ${({ noPadding }) =>
        noPadding ? 0 : `${Variables.Spacers.XS} ${Variables.Spacers.S}`};
    border-radius: ${Variables.Radiuses.M};
    line-height: ${Variables.LineHeight};
    transition: ${Variables.Transitions.Short};
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    text-align: center;
    text-decoration: none;
    justify-self: ${({ justify }) => justify};

    .icon-left {
        margin-right: ${Variables.Spacers.XS};
        height: 100%;
    }

    .icon-right {
        margin-left: ${Variables.Spacers.XS};
        height: 100%;
    }

    ${({ btnStyle, color }) =>
        btnStyle === "plain" &&
        css`
            background-color: ${Mixins.Color};
            color: ${color === "white"
                ? Variables.Colors.Primary500
                : Variables.Colors.White};

            &:hover {
                background-color: ${Mixins.ColorHover};
            }

            &:active {
                background-color: ${Mixins.ColorActive};
            }

            &:disabled {
                background-color: ${Variables.Colors.Gray100};
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${({ btnStyle }) =>
        btnStyle === "text" &&
        css`
            color: ${Mixins.Color};

            &:hover {
                color: ${Mixins.ColorHover};
            }

            &:active {
                color: ${Mixins.ColorActive};
            }

            &:disabled {
                color: ${Variables.Colors.Gray500};
            }
        `}

        ${({ btnStyle }) =>
        btnStyle === "outline" &&
        css`
            border-color: ${Mixins.Color};
            color: ${Mixins.Color};

            &:hover {
                border-color: ${Mixins.ColorHover};
                color: ${Mixins.ColorHover};
            }

            &:active {
                border-color: ${Mixins.ColorActive};
                color: ${Mixins.ColorActive};
            }

            &:disabled {
                border-color: ${Variables.Colors.Gray500};
                color: ${Variables.Colors.Gray500};
            }
        `}
`

export { Container }
