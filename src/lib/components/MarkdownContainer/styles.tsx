/*=============================================== MarkdownContainer styles ===============================================*/

import Markdown from "markdown-to-jsx"
import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledMarkdownContainer = styled(Markdown)`
    ${Mixins.Flexbox({
        $gap: "s",
        $alignItems: "stretch",
        $flexDirection: "column",
    })};
`

setDefaultTheme([StyledMarkdownContainer])

export { StyledMarkdownContainer }
