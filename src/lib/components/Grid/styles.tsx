/*=============================================== Grid styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: var(
        --grid-template-col,
        repeat(var(--grid-col, 1), 1fr)
    );
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
    ${Mixins.PaddingVar("grid")};

    &[data-inline="true"] {
        display: inline-grid;
    }

    &[data-justify-items="start"] {
        justify-items: start;
    }

    &[data-justify-items="end"] {
        justify-items: end;
    }

    &[data-justify-items="center"] {
        justify-items: center;
    }

    &[data-justify-items="stretch"] {
        justify-items: stretch;
    }

    &[data-align-items="start"] {
        align-items: start;
    }

    &[data-align-items="end"] {
        align-items: end;
    }

    &[data-align-items="center"] {
        align-items: center;
    }

    &[data-align-items="stretch"] {
        align-items: stretch;
    }

    &[data-justify-content="start"] {
        justify-content: start;
    }

    &[data-justify-content="end"] {
        justify-content: end;
    }

    &[data-justify-content="center"] {
        justify-content: center;
    }

    &[data-justify-content="stretch"] {
        justify-content: stretch;
    }

    &[data-justify-content="space-around"] {
        justify-content: space-around;
    }

    &[data-justify-content="space-between"] {
        justify-content: space-between;
    }

    &[data-justify-content="space-evenly"] {
        justify-content: space-evenly;
    }

    &[data-align-content="start"] {
        align-content: start;
    }

    &[data-align-content="end"] {
        align-content: end;
    }

    &[data-align-content="center"] {
        align-content: center;
    }

    &[data-align-content="stretch"] {
        align-content: stretch;
    }

    &[data-align-content="space-around"] {
        align-content: space-around;
    }

    &[data-align-content="space-between"] {
        align-content: space-between;
    }

    &[data-align-content="space-evenly"] {
        align-content: space-evenly;
    }
`

setDefaultTheme([StyledGrid])

export { StyledGrid }
