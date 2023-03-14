/*=============================================== Button styles ===============================================*/

import styled from "styled-components"

import { Mixins, Breakpoints, FontSizes } from "../../"
import { ColorsHoverTypes, ShadowsTypes, RadiusesTypes } from "../../types"
import { ButtonVariantTypes, ButtonSizesTypes } from "./types"

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
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};
    ${Mixins.BorderRadius};
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
    ${({ $shadow, $shadowDefault, $shadowHover, $shadowActive }) =>
        Mixins.Shadow({
            $shadow: $shadow,
            $isExtended: $shadowDefault && true,
            $shadowDefault: $shadowDefault,
            $shadowHover: $shadowHover,
            $shadowActive: $shadowActive,
        })};

    @media ${Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain" && theme.ColorsHoverHover};
            color: ${({ $variant, theme }) =>
                ($variant === "text" || $variant === "outline") &&
                theme.ColorsHoverHover};
            border-color: ${({ $variant, theme }) =>
                $variant === "outline" && theme.ColorsHoverHover};
        }

        &:active {
            background-color: ${({ $variant, theme }) =>
                $variant === "plain" && theme.ColorsHoverActive};
            color: ${({ $variant, theme }) =>
                ($variant === "text" || $variant === "outline") &&
                theme.ColorsHoverActive};
            border-color: ${({ $variant, theme }) =>
                $variant === "outline" && theme.ColorsHoverActive};
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
