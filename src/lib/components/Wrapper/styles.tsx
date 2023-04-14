/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { setDefaultTheme } from "../../utils"

const StyledWrapper = styled.div`
    display: grid;
    position: relative;
    z-index: 10;
    grid-template-columns: var(--wrapper-template);
    gap: var(--wrapper-gap);
    background-color: ${({ theme }) => theme.Background};
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
