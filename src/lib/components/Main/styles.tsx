/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"

import { Breakpoints, Mixins } from "../../"
import type { MainSizeTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const MainBase = styled.main`
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
    grid-column: calc(var(--main-position) + 1);

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

const StyledMain = styled(MainBase)<{
    $size?: MainSizeTypes
}>`
    ${({ $size }) =>
        $size === "full" &&
        css`
            grid-template-columns: 1fr var(--main-content-size) 1fr;

            & > * {
                grid-column: 2;
            }
        `}
`

setDefaultTheme([StyledMain])

export { StyledMain }
