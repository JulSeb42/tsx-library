/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"

import { FontSizes, Radiuses, Mixins } from "../../"
import { AllColorsTypes } from "../../types"
import { TagVariantsTypes } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledTag = styled.span<{
    $variant?: TagVariantsTypes
    $color?: AllColorsTypes
    $textColor?: AllColorsTypes
    $hasIcon?: boolean
}>`
    font-size: ${FontSizes.Small};
    ${({ $variant }) =>
        Mixins.Padding({
            $padding: {
                topBottom: "xxs",
                leftRight: $variant === "pill" ? "m" : "s",
            },
        })}
    border-radius: ${({ $variant }) =>
        $variant === "pill" ? Radiuses.Round : Radiuses.S};
    background-color: ${({ theme }) => theme.AllColors};
    color: ${({ $color, $textColor, theme }) =>
        $textColor
            ? theme.AllColors({ $color: $textColor })
            : $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : theme.Background};

    ${({ $hasIcon }) =>
        $hasIcon &&
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: "center",
            $gap: "xxs",
            $inline: true,
        })};
`

setDefaultTheme([StyledTag])

export { StyledTag }
