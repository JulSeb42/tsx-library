/*=============================================== Truncate styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins, Tag } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledTruncate = styled.div`
    ${Mixins.Flexbox({
        $flexDirection: "row",
        $alignItems: "center",
        $justifyContent: "flex-start",
        $gap: "xs",
    })};
    overflow: hidden;
`

const Number = styled(Tag)`
    margin-left: auto;
    padding: 0;
    font-weight: ${FontWeights.Black};
    white-space: nowrap;
    display: block;
    background-color: transparent;
    color: currentColor;
`

setDefaultTheme([StyledTruncate, Number])

export { StyledTruncate, Number }
