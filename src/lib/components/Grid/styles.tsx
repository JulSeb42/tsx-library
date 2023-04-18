/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import {
    setDefaultTheme,
    generateDataAttributes,
    typeValues,
} from "../../utils"

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: var(
        --grid-template-col,
        repeat(var(--grid-col, 1), 1fr)
    );
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
    ${Mixins.PaddingVar("grid")}

    &[data-inline="true"] {
        display: inline-grid;
    }

    ${generateDataAttributes(
        "justify-items",
        Object.keys(typeValues.gridJustifyItems)
    )}

    ${generateDataAttributes(
        "align-items",
        Object.keys(typeValues.gridAlignItems)
    )}
    
    ${generateDataAttributes(
        "justify-content",
        Object.keys(typeValues.gridJustifyContent)
    )}
    
    ${generateDataAttributes(
        "align-content",
        Object.keys(typeValues.gridAlignContent)
    )}
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
