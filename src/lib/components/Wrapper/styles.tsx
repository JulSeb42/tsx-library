/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { Mixins, Breakpoints } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledWrapper = styled.div`
    position: relative;
    background-color: ${({ theme }) => theme.Background};
    ${Mixins.Flexbox({
        $flexDirection: "row",
        $justifyContent: "center",
        $gap: "l",
    })}

    @media ${Breakpoints.Tablet} {
        flex-direction: column;
        align-items: center;
    }
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
