/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Breakpoints, Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledMain = styled.main`
    ${Mixins.Grid({
        $alignContent: "start",
        $alignItems: "start",
        $justifyContent: "stretch",
        $justifyItems: "stretch",
        $gap: "l",
        $padding: {
            topBottom: "xxl",
        },
    })};
    width: var(--main-size);
    min-height: var(--main-min-height, 100vh);

    &.position-one {
        grid-column: 2;
    }

    &.position-two {
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
