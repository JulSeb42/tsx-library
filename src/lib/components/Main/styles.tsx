/*=============================================== Main styles ===============================================*/

import styled, { css } from "styled-components"

import { Breakpoints } from "../../"
import type { MainSizeTypes } from "./types"

import { setDefaultTheme } from "../../utils"

const MainBase = styled.main`
    width: var(--main-size);
    gap: var(--main-gap);
    padding-top: var(--main-padding);
    padding-bottom: var(--main-padding);
    min-height: var(--main-min-height, 100vh);
    grid-column: calc(var(--main-position) + 1);
    display: grid;
    align-content: var(--main-align-content, start);
    align-items: var(--main-align-items, start);
    justify-content: var(--main-justify-content, stretch);
    justify-items: var(--main-justify-items, start);

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
