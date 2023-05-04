/*=============================================== Aside styles ===============================================*/

import styled from "styled-components"

import { Mixins, Breakpoints } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledAside = styled.aside`
    width: var(--aside-size);
    min-height: var(--aside-min-height, 100vh);
    position: relative;
    ${Mixins.Flexbox({
        $flexDirection: "column",
        $alignItems: "stretch",
        $padding: {
            topBottom: "xxl",
        },
    })}

    @media ${Breakpoints.Tablet} {
        min-height: inherit;
    }
`

setDefaultTheme([StyledAside])

export { StyledAside }
