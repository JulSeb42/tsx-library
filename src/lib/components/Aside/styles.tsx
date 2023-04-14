/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledAside = styled.aside`
    ${Mixins.Flexbox({
        $flexDirection: "column",
    })};
    align-content: var(--aside-align-content, flex-start);
    align-items: var(--aside-align-items, flex-start);
    justify-content: var(--aside-justify-content, flex-start);
    justify-items: var(--aside-justify-items, flex-start);
    gap: var(--aside-gap);
    width: var(--aside-size);
    padding-top: var(--aside-padding);
    padding-bottom: var(--aside-padding);
    min-height: var(--aside-min-height, 100vh);
    grid-column: var(--aside-position);

    @media ${Breakpoints.Tablet} {
        min-height: inherit;
        grid-column: 2;
    }

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
        align-self: stretch;
    }
`

setDefaultTheme([StyledAside])

export { StyledAside }
