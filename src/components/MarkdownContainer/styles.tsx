// Imports
import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import { stringifyPx } from "js-utils-julseb"

import * as Mixins from "../Mixins"

const Container = styled(Markdown)`
    ${({ gap }) => Mixins.Grid({
        gap: gap ? stringifyPx(gap) : "s",
    })};
`

export { Container }
