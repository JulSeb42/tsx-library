/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledAside = styled.aside`
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignContent: "flex-start",
        $alignItems: "flex-start",
        $justifyContent: "flex-start",
        $justifyItems: "flex-start",
        $gap: "l",
        $padding: {
            topBottom: "xxl",
        },
    })};
    width: var(--aside-size);
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
