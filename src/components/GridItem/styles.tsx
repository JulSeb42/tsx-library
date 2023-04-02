/*=============================================== GridItem styles ===============================================*/

import styled from "styled-components"

import { Spacers, Radiuses } from "../../lib"

export const StyledGridItem = styled.div<{}>`
    background-color: ${({ theme }) => theme.Primary500};
    color: ${({ theme }) => theme.Background};
    padding: ${Spacers.S};
    border-radius: ${Radiuses.M};
`
