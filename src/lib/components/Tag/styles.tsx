/*=============================================== Tag styles ===============================================*/

import styled from "styled-components"

import { FontSizes, Mixins } from "../../"
import type {
    AllColorsTypes,
    SpacersTypes,
    PaddingTypes,
    RadiusesTypes,
} from "../../types"
import type { TagVariantTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledTag = styled.span<{
    $color?: AllColorsTypes
    $textColor?: AllColorsTypes
    $hasIcon?: boolean
    $gap?: SpacersTypes
    $padding?: PaddingTypes
    $borderRadius?: RadiusesTypes
    $variant?: TagVariantTypes
}>`
    font-size: ${FontSizes.Small};
    ${Mixins.Padding};
    ${Mixins.BorderRadius};
    background-color: ${({ theme, $variant }) =>
        $variant === "outline" ? "transparent" : theme.AllColors};
    color: ${({ $color, $textColor, theme, $variant }) =>
        $textColor
            ? theme.AllColors({ $color: $textColor })
            : $variant === "outline"
            ? theme.AllColors({ $color })
            : $color === "white"
            ? theme.Primary500
            : $color === "black"
            ? theme.White
            : theme.Background};
    border: 1px solid
        ${({ $variant, theme, $color }) =>
            $variant === "outline"
                ? theme.AllColors({ $color: $color })
                : "transparent"}
        ${({ $hasIcon, $gap }) =>
            $hasIcon &&
            Mixins.Flexbox({
                $alignItems: "center",
                $justifyContent: "center",
                $gap,
                $inline: true,
            })};
`

setDefaultTheme([StyledTag])

export { StyledTag }
