/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledMain = styled.main`
    width: var(--main-size);
    min-height: var(--main-min-height, 100vh);
    ${Mixins.Grid({
        $alignContent: "start",
        $alignItems: "start",
        $justifyContent: "stretch",
        $justifyItems: "stretch",
        $gap: "l",
        $padding: {
            topBottom: "xxl",
        },
    })}

    &[data-position="1"] {
        grid-column: 2;
    }

    &[data-position="2"] {
        grid-column: 3;
    }

    &.full {
        grid-template-columns: 1fr var(--main-content-size) 1fr;

        & > * {
            grid-column: 2;
        }
    }

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
        justify-self: stretch;
    }
`

setDefaultTheme([StyledMain])

export { StyledMain }
