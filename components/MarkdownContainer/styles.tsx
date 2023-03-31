/*=============================================== MarkdownContainer styles ===============================================*/

import styled from "styled-components"
import Markdown from "markdown-to-jsx"

import { Mixins } from "../../"
import type { SpacersTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledMarkdownContainer = styled(Markdown)<{
    $gap?: SpacersTypes
}>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $flexDirection: "column",
            $alignItems: "stretch",
            $gap,
        })};
`

setDefaultTheme([StyledMarkdownContainer])

export { StyledMarkdownContainer }
