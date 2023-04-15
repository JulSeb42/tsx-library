/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledGrid = styled.div`
    display: var(--grid-display, grid);
    grid-template-columns: var(
        --grid-template-col,
        repeat(var(--grid-col, 1), 1fr)
    );
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
    justify-items: var(--grid-justify-items);
    justify-content: var(--grid-justify-content);
    align-items: var(--grid-align-items);
    align-content: var(--grid-align-content);
    ${Mixins.PaddingVar()}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
