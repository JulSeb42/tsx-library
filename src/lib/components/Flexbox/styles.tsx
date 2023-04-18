/*=============================================== Flexbox styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import {
    setDefaultTheme,
    typeValues,
    generateDataAttributes,
} from "../../utils"

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
        Object.keys(typeValues.flexDirection)
    )};

    ${generateDataAttributes("flex-wrap", Object.keys(typeValues.flexWrap))};

    ${generateDataAttributes(
        "justify-content",
        Object.keys(typeValues.flexJustifyContent)
    )};

    ${generateDataAttributes(
        "justify-items",
        Object.keys(typeValues.flexJustifyItems)
    )};

    ${generateDataAttributes(
        "align-content",
        Object.keys(typeValues.flexAlignContent)
    )};

    ${generateDataAttributes(
        "align-items",
        Object.keys(typeValues.flexAlignItems)
    )};
`

setDefaultTheme([StyledFlexbox])

export { StyledFlexbox }
