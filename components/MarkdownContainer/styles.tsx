/*=============================================== MarkdownContainer styles ===============================================*/

import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import { stringifyPx } from "ts-utils-julseb"

import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SpacersTypes } from "../../utils/common-types"

const StyledMarkdownContainer = styled(Markdown)<{
    $gap?: SpacersTypes | string | number
}>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap: typeof $gap === "number" ? stringifyPx($gap) : $gap,
        })};
`

setDefaultTheme([StyledMarkdownContainer])

export { StyledMarkdownContainer }
