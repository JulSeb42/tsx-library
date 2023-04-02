/*=============================================== Section styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledSection = styled.section<{ $gap?: SpacersTypes }>`
    ${({ $gap }) =>
        Mixins.Grid({
            $gap,
            $justifyItems: "start",
        })};

    & > div,
    & > h1,
    & > h2,
    & > h3,
    & > h4,
    & > h5,
    & > h6,
    & > p,
    & > ul,
    & > ol,
    & > dl,
    & > section,
    & > input,
    & > article,
    & > hr,
    & > pre,
    & > table,
    & > header,
    & > footer,
    & > iframe,
    & > nav,
    & > noscript,
    & > picture,
    & > select,
    & > textarea,
    & > form {
        justify-self: stretch;
    }
`

setDefaultTheme([StyledSection])

export { StyledSection }