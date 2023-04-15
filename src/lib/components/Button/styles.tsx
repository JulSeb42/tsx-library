/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, FontSizes, Mixins, Radiuses } from "../../"
import type { ColorsHoverTypes } from "../../types"
import type { ButtonSizesTypes, ButtonVariantTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const ButtonBase = styled.button`
    border: 1px solid transparent;
    text-decoration: none;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};
    border-radius: ${Radiuses.M};
`

const ButtonSize = styled(ButtonBase)<{ $size?: ButtonSizesTypes }>`
    font-size: ${({ $size }) =>
        $size === "small" ? FontSizes.Small : FontSizes.Body};
    ${({ $size }) =>
        $size === "small"
            ? Mixins.Padding({
                  $padding: { topBottom: "xxs", leftRight: "xs" },
              })
            : Mixins.Padding({
                  $padding: { topBottom: "xs", leftRight: "s" },
              })};
`

const StyledButton = styled(ButtonSize)<{
    $color?: ColorsHoverTypes
    $variant?: ButtonVariantTypes
}>`
    background-color: ${({ $variant, theme }) =>
        $variant === "plain"
            ? theme.ColorsHoverDefault
            : $variant === "ghost"
            ? theme.ColorsGhostDefault
            : "transparent"};
    color: ${({ $variant, $color, theme }) =>
        $variant === "plain"
            ? $color === "white"
                ? theme.Primary500
                : $color === "background"
                ? theme.Font
                : theme.Background
            : $variant === "ghost"
            ? $color === "white" || $color === "background"
                ? theme.Primary500
                : $color === "font"
                ? theme.Background
                : theme.ColorsHoverDefault
            : theme.ColorsHoverDefault};

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain"
                    ? theme.ColorsHoverHover
                    : $variant === "ghost" && theme.ColorsGhostHover};
            color: ${({ $variant, theme }) =>
                ($variant === "transparent" || $variant === "outline") &&
                theme.ColorsHoverHover};
            border-color: ${({ $variant, theme }) =>
                $variant === "outline" && theme.ColorsHoverHover};
        }

        &:not(:disabled):active {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain"
                    ? theme.ColorsHoverActive
                    : $variant === "ghost" && theme.ColorsGhostActive};
            color: ${({ $variant, theme }) =>
                ($variant === "transparent" || $variant === "outline") &&
                theme.ColorsHoverActive};
            border-color: ${({ $variant, theme }) =>
                $variant === "outline" && theme.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $variant, theme }) =>
            $variant === "plain"
                ? theme.Gray100
                : $variant === "ghost"
                ? theme.Gray50
                : undefined};
        color: ${({ theme }) => theme.Gray500};
        border-color: ${({ $variant, theme }) =>
            $variant === "outline" && theme.Gray500};
        box-shadow: none;
    }
`

setDefaultTheme([StyledButton])

export { StyledButton }
