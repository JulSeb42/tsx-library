/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledGrid = styled.div`
    display: var(--grid-display, grid);
    grid-template-columns: var(--template-col, repeat(var(--col, 1), 1fr));
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
    justify-items: var(--justify-items);
    justify-content: var(--justify-content);
    align-items: var(--align-items);
    align-content: var(--align-content);
    ${Mixins.PaddingVar()}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
