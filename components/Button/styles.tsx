/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import { Mixins, Breakpoints, FontSizes } from "../../"
import type {
    ColorsHoverTypes,
    ShadowsTypes,
    RadiusesTypes,
    SpacersTypes,
} from "../../types"
import type { ButtonVariantTypes, ButtonSizesTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledButton = styled.button<{
    $color?: ColorsHoverTypes
    $variant?: ButtonVariantTypes
    $noPadding?: boolean
    $shadow?: ShadowsTypes
    $shadowDefault?: ShadowsTypes
    $shadowHover?: ShadowsTypes
    $shadowActive?: ShadowsTypes
    $borderRadius?: RadiusesTypes
    $size?: ButtonSizesTypes
    $gap?: SpacersTypes
}>`
    border: 1px solid
        ${({ $variant, $color, theme }) =>
            $variant === "outline"
                ? theme.ColorsHoverDefault({
                      $color: $color,
                  })
                : "transparent"};
    text-decoration: none;
    font-size: ${({ $size }) =>
        $size === "small" ? FontSizes.Small : FontSizes.Body};
    ${({ $noPadding, $size }) =>
        $noPadding
            ? `padding: 0`
            : $size === "small"
            ? Mixins.Padding({
                  $padding: { topBottom: "xxs", leftRight: "xs" },
              })
            : Mixins.Padding({
                  $padding: { topBottom: "xs", leftRight: "s" },
              })};
    ${({ $gap }) =>
        Mixins.Flexbox({
            $inline: true,
            $alignItems: "center",
            $justifyContent: "center",
            $gap,
        })};
    ${Mixins.BorderRadius};
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
    ${({ $shadow, $shadowDefault, $shadowHover, $shadowActive }) =>
        Mixins.Shadow({
            $shadow: $shadow,
            $isExtended: $shadowDefault && true,
            $shadowDefault: $shadowDefault,
            $shadowHover: $shadowHover,
            $shadowActive: $shadowActive,
        })};

    @media ${Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain"
                    ? theme.ColorsHoverHover
                    : $variant === "ghost" && theme.ColorsGhostHover};
            color: ${({ $variant, theme }) =>
                ($variant === "text" || $variant === "outline") &&
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
                ($variant === "text" || $variant === "outline") &&
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
                : ""};
        color: ${({ theme }) => theme.Gray500};
        border-color: ${({ $variant, theme }) =>
            $variant === "outline" && theme.Gray500};
        box-shadow: none;
    }
`

setDefaultTheme([StyledButton])

export { StyledButton }
