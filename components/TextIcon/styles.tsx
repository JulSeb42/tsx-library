/*=============================================== TextIcon styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type { SpacersTypes } from "../../types"
import type { PossibleTextIconTags } from "./types"

import { setDefaultTheme } from "../../utils"

const StyledTextIcon = styled.div<{ $gap?: SpacersTypes }>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $alignItems: "flex-start",
            $gap,
        })};
`

const IconContainer = styled.span<{
    $tag?: PossibleTextIconTags
    $lineHeight: number
    $display?: boolean
}>`
    height: ${({ $tag, $lineHeight, $display }) =>
        $tag === "h1" && $display
            ? 80 * $lineHeight
            : $tag === "h2" && $display
            ? 64 * $lineHeight
            : $tag === "h3" && $display
            ? 56 * $lineHeight
            : $tag === "h4" && $display
            ? 48 * $lineHeight
            : $tag === "h5" && $display
            ? 40 * $lineHeight
            : $tag === "h1"
            ? 40 * $lineHeight
            : $tag === "h2"
            ? 32 * $lineHeight
            : $tag === "h3"
            ? 28.8 * $lineHeight
            : $tag === "h4"
            ? 24 * $lineHeight
            : $tag === "h5"
            ? 20.8 * $lineHeight
            : $tag === "h6" || $tag === "blockquote"
            ? 17.6 * $lineHeight
            : $tag === "p"
            ? 16 * $lineHeight
            : $tag === "small"
            ? 14 * $lineHeight
            : ""}px;
    display: inline-block;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
`

setDefaultTheme([StyledTextIcon, IconContainer])

export { StyledTextIcon, IconContainer }
