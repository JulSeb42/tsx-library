/*=============================================== Section styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledSection = styled.section`
    ${Mixins.Flexbox({
        $justifyItems: "start",
        $alignItems: "stretch",
        $flexDirection: "column",
    })};
    gap: var(--section-gap);

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
