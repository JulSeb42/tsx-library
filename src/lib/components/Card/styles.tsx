/*=============================================== Card styles ===============================================*/

import styled from "styled-components"

import { Mixins, FontFamilies } from "../.."
import { typeValues } from "../../types"
import type { BorderTypes } from "../../types"

import { setDefaultTheme, generateDataAttributes } from "../../utils"

const BaseCard = styled.div`
    text-decoration: none;
    color: ${({ theme }) => theme.Font};
    background-color: ${({ theme }) => theme.Background};
    width: var(--card-width, 100%);
    height: var(--card-height);
    max-width: var(--card-max-width);
    text-align: left;
    font-family: ${FontFamilies.Body};
    ${Mixins.BorderRadiusVar("card")};
    ${Mixins.PaddingVar("card")};
    background-image: url(var(--card-background-image));
    background-origin: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: border-box;
    overflow: hidden;

    display: flex;
    column-gap: var(--card-column-gap);
    row-gap: var(--card-row-gap);

    &[data-inline="true"] {
        display: inline-flex;
    }

    ${generateDataAttributes(
        "flex-direction",
        Object.keys(typeValues.flexDirection)
    )}

    ${generateDataAttributes("flex-wrap", Object.keys(typeValues.flexWrap))}

    ${generateDataAttributes(
        "justify-content",
        Object.keys(typeValues.flexJustifyContent)
    )}

    ${generateDataAttributes(
        "justify-items",
        Object.keys(typeValues.flexJustifyItems)
    )}

    ${generateDataAttributes(
        "align-content",
        Object.keys(typeValues.flexAlignContent)
    )}

    ${generateDataAttributes(
        "align-items",
        Object.keys(typeValues.flexAlignItems)
    )}
`

const StyledCard = styled(BaseCard)<{
    $border?: BorderTypes
}>`
    ${({ $border }) => $border && Mixins.Border({ $border })};
`

setDefaultTheme([StyledCard])

export { StyledCard }
