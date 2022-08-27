/*=============================================== ButtonIcon styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsHoverTypes } from "../../utils/common-types"

import {  ButtonStylesProps } from "./types"

const StyledButtonIcon = styled.button<{
    $buttonStyle?: ButtonStylesProps
    $color?: ColorsHoverTypes
    $size?: number
    $hoverBackground?: boolean
}>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    padding: 0;
    border: none;
    background-color: ${({ $buttonStyle }) =>
        $buttonStyle === "plain" ? Mixins.ColorsHoverDefault : "transparent"};
    color: ${({ $buttonStyle, $color }) =>
        $buttonStyle === "plain" && $color === "white"
            ? Variables.Colors.Primary500
            : $buttonStyle === "plain" && $color !== "white"
            ? Variables.Colors.White
            : $buttonStyle === "transparent" && Mixins.ColorsHoverDefault};

    @media ${Variables.Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ $buttonStyle, $hoverBackground }) =>
                $buttonStyle === "plain"
                    ? Mixins.ColorsHoverHover
                    : $buttonStyle === "transparent" && $hoverBackground
                    ? Variables.Colors.Gray50
                    : ""};
            color: ${({ $buttonStyle }) =>
                $buttonStyle === "transparent" && Mixins.ColorsHoverHover};
        }

        &:not(:disabled):active {
            background-color: ${({ $buttonStyle }) =>
                $buttonStyle === "plain" && Mixins.ColorsHoverActive};
            color: ${({ $buttonStyle }) =>
                $buttonStyle === "transparent" && Mixins.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $buttonStyle }) =>
            $buttonStyle === "plain" && Variables.Colors.Gray100};
        color: ${Variables.Colors.Gray500};
    }
`

export { StyledButtonIcon }
