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
    $display?: boolean
}>`
    height: ${({ $tag, $display }) =>
        $tag === "h1" && $display
            ? 80 * 1.5
            : $tag === "h2" && $display
            ? 64 * 1.5
            : $tag === "h3" && $display
            ? 56 * 1.5
            : $tag === "h4" && $display
            ? 48 * 1.5
            : $tag === "h5" && $display
            ? 40 * 1.5
            : $tag === "h1"
            ? 40 * 1.5
            : $tag === "h2"
            ? 32 * 1.5
            : $tag === "h3"
            ? 28.8 * 1.5
            : $tag === "h4"
            ? 24 * 1.5
            : $tag === "h5"
            ? 20.8 * 1.5
            : $tag === "h6" || $tag === "blockquote"
            ? 17.6 * 1.5
            : $tag === "p"
            ? 16 * 1.5
            : $tag === "small"
            ? 14 * 1.5
            : ""}px;
    display: inline-block;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
    })};
`

setDefaultTheme([StyledTextIcon, IconContainer])

export { StyledTextIcon, IconContainer }
