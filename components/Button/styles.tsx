/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ColorsHoverTypes } from "../../utils/common-types"
import { ButtonStylesType } from "./types"

const StyledButton = styled.button<{
    $color?: ColorsHoverTypes
    $buttonStyle?: ButtonStylesType
    $noPadding?: boolean
}>`
    border: 1px solid
        ${({ $buttonStyle }) =>
            $buttonStyle === "outline"
                ? Mixins.ColorsHoverDefault
                : "transparent"};
    text-decoration: none;
    padding: ${({ $noPadding }) =>
        $noPadding ? 0 : `${Variables.Spacers.XS} ${Variables.Spacers.S}`};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};
    border-radius: ${Variables.Radiuses.M};
    background-color: ${({ $buttonStyle }) =>
        $buttonStyle === "plain" ? Mixins.ColorsHoverDefault : "transparent"};
    color: ${({ $buttonStyle, $color }) =>
        $buttonStyle === "plain" && $color !== "white"
            ? Variables.Colors.White
            : $buttonStyle === "plain" && $color === "white"
            ? Variables.Colors.Primary500
            : Mixins.ColorsHoverDefault};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $buttonStyle }) =>
                $buttonStyle === "plain" && Mixins.ColorsHoverHover};
            color: ${({ $buttonStyle }) =>
                ($buttonStyle === "text" || $buttonStyle === "outline") &&
                Mixins.ColorsHoverHover};
            border-color: ${({ $buttonStyle }) =>
                $buttonStyle === "outline" && Mixins.ColorsHoverHover};
        }

        &:active {
            background-color: ${({ $buttonStyle }) =>
                $buttonStyle === "plain" && Mixins.ColorsHoverActive};
            color: ${({ $buttonStyle }) =>
                ($buttonStyle === "text" || $buttonStyle === "outline") &&
                Mixins.ColorsHoverActive};
            border-color: ${({ $buttonStyle }) =>
                $buttonStyle === "outline" && Mixins.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $buttonStyle }) =>
            $buttonStyle === "plain" ? Variables.Colors.Gray100 : ""};
        color: ${Variables.Colors.Gray500};
        border-color: ${({ $buttonStyle }) =>
            $buttonStyle === "outline" && Variables.Colors.Gray500};
    }
`

export { StyledButton }
