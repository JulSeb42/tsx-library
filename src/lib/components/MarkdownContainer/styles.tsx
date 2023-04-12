/*=============================================== MarkdownContainer styles ===============================================*/

import styled from "styled-components"
import Markdown from "markdown-to-jsx"

import { Mixins } from "../../"
import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledMarkdownContainer = styled(Markdown)<{
    $gap?: SpacersTypes
}>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $alignItems: "stretch",
            $flexDirection: "column",
        })};
`

setDefaultTheme([StyledMarkdownContainer])

export { StyledMarkdownContainer }
