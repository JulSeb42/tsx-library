/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import { Spacers, Breakpoints, Radiuses } from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ColorsHoverTypes, ShadowsTypes } from "../../utils/common-types"
import { ButtonStylesType } from "./types"

const StyledButton = styled.button<{
    $color?: ColorsHoverTypes
    $variant?: ButtonStylesType
    $noPadding?: boolean
    $shadow?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
}>`
    border: 1px solid
        ${({ $variant, $color, theme }) =>
            $variant === "outline"
                ? theme.ColorsHoverDefault({
                      $color: $color,
                  })
                : "transparent"};
    text-decoration: none;
    padding: ${({ $noPadding }) =>
        $noPadding ? 0 : `${Spacers.XS} ${Spacers.S}`};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};
    border-radius: ${Radiuses.M};
    background-color: ${({ $variant, theme }) =>
        $variant === "plain" ? theme.ColorsHoverDefault : "transparent"};
    color: ${({ $variant, $color, theme }) =>
        $variant === "plain"
            ? $color === "white"
                ? theme.Primary500
                : $color === "background"
                ? theme.Font
                : theme.Background
            : theme.ColorsHoverDefault};
    ${({ $shadow }) => Mixins.Shadow({ $shadow: $shadow })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain" && theme.ColorsHoverHover};
            color: ${({ $variant, theme }) =>
                ($variant === "text" || $variant === "outline") &&
                theme.ColorsHoverHover};
            border-color: ${({ $variant, theme }) =>
                $variant === "outline" && theme.ColorsHoverHover};
            ${({ $shadowHover }) => Mixins.Shadow({ $shadow: $shadowHover })};
        }

        &:active {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain" && theme.ColorsHoverActive};
            color: ${({ $variant, theme }) =>
                ($variant === "text" || $variant === "outline") &&
                theme.ColorsHoverActive};
            border-color: ${({ $variant, theme }) =>
                $variant === "outline" && theme.ColorsHoverActive};
            ${({ $shadowActive }) => Mixins.Shadow({ $shadow: $shadowActive })};
        }
    }

    &:disabled {
        background-color: ${({ $variant, theme }) =>
            $variant === "plain" ? theme.Gray100 : ""};
        color: ${({ theme }) => theme.Gray500};
        border-color: ${({ $variant, theme }) =>
            $variant === "outline" && theme.Gray500};
        box-shadow: none;
    }
`

setDefaultTheme([StyledButton])

export { StyledButton }
