/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { Mixins, generateDataAttributes } from "../../"
import { flexDirectionValues } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledFlexbox = styled.div`
    display: flex;
    column-gap: var(--flex-column-gap);
    row-gap: var(--flex-row-gap);
    ${Mixins.PaddingVar("flex")};

    &[data-inline="true"] {
        display: inline-flex;
    }

    ${generateDataAttributes(
        "flex-direction",
        Object.keys(flexDirectionValues)
    )};

    ${
        "" /* &[data-flex-direction="row"] {
        flex-direction: row;
    }

    &[data-flex-direction="row-reverse"] {
        flex-direction: row-reverse;
    }

    &[data-flex-direction="column"] {
        flex-direction: column;
    }

    &[data-flex-direction="column-reverse"] {
        flex-direction: column-reverse;
    } */
    }

    &[data-flex-wrap="nowrap"] {
        flex-wrap: nowrap;
    }

    &[data-flex-wrap="wrap"] {
        flex-wrap: wrap;
    }

    &[data-flex-wrap="wrap-reverse"] {
        flex-wrap: wrap-reverse;
    }

    &[data-flex-justify-content="flex-start"] {
        justify-content: flex-start;
    }

    &[data-flex-justify-content="flex-end"] {
        justify-content: flex-end;
    }

    &[data-flex-justify-content="center"] {
        justify-content: center;
    }

    &[data-flex-justify-content="space-between"] {
        justify-content: space-between;
    }

    &[data-flex-justify-content="space-around"] {
        justify-content: space-around;
    }

    &[data-flex-justify-content="space-evenly"] {
        justify-content: space-evenly;
    }

    &[data-flex-justify-items="normal"] {
        justify-items: normal;
    }

    &[data-flex-justify-items="stretch"] {
        justify-items: stretch;
    }

    &[data-flex-justify-items="baseline"] {
        justify-items: baseline;
    }

    &[data-flex-justify-items="center"] {
        justify-items: center;
    }

    &[data-flex-justify-items="start"] {
        justify-items: start;
    }

    &[data-flex-justify-items="end"] {
        justify-items: end;
    }

    &[data-flex-justify-items="flex-start"] {
        justify-items: flex-start;
    }

    &[data-flex-justify-items="flex-end"] {
        justify-items: flex-end;
    }

    &[data-flex-justify-items="self-start"] {
        justify-items: self-start;
    }

    &[data-flex-justify-items="self-end"] {
        justify-items: self-end;
    }

    &[data-flex-justify-items="left"] {
        justify-items: left;
    }

    &[data-flex-justify-items="right"] {
        justify-items: right;
    }

    &[data-flex-justify-items="legacy"] {
        justify-items: legacy;
    }

    &[data-flex-align-content="flex-start"] {
        align-content: flex-start;
    }

    &[data-flex-align-content="flex-end"] {
        align-content: flex-end;
    }

    &[data-flex-align-content="center"] {
        align-content: center;
    }

    &[data-flex-align-content="space-between"] {
        align-content: space-between;
    }

    &[data-flex-align-content="space-around"] {
        align-content: space-around;
    }

    &[data-flex-align-content="space-evenly"] {
        align-content: space-evenly;
    }

    &[data-flex-align-content="stretch"] {
        align-content: stretch;
    }

    &[data-flex-align-content="normal"] {
        align-content: normal;
    }

    &[data-flex-align-items="stretch"] {
        align-items: stretch;
    }

    &[data-flex-align-items="flex-start"] {
        align-items: flex-start;
    }

    &[data-flex-align-items="flex-end"] {
        align-items: flex-end;
    }

    &[data-flex-align-items="center"] {
        align-items: center;
    }

    &[data-flex-align-items="baseline"] {
        align-items: baseline;
    }
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
