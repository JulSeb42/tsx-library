/*=============================================== Main styles ===============================================*/

import styled from "styled-components"

import { Mixins, Breakpoints } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledMain = styled.main`
    width: var(--main-size);
    min-height: var(--main-min-height, 100vh);
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $gap: "l",
        $padding: {
            topBottom: "xxl",
        },
    })}

    &.full {
        display: grid;
        grid-template-columns: 1fr var(--main-content-size) 1fr;

        & > * {
            grid-column: 2;
        }
    }

    @media ${Breakpoints.Tablet} {
        min-height: inherit;
    }
`

setDefaultTheme([StyledMain])

export { StyledMain }
