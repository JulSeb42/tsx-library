/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledWrapper = styled.div`
    ${Mixins.Grid({
        $gap: "l",
        $col: "var(--wrapper-template)",
    })};
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
