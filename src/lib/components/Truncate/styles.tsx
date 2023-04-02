/*=============================================== Truncate styles ===============================================*/

import styled from "styled-components"

import { Mixins, Tag, FontWeights } from "../../"
import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledTruncate = styled.div<{
    $gap?: SpacersTypes
    $showFullList?: boolean
}>`
    ${({ $gap, $showFullList }) =>
        Mixins.Flexbox({
            $flexDirection: "row",
            $alignItems: "center",
            $justifyContent: "flex-start",
            $gap: $gap,
            $flexWrap: $showFullList ? "wrap" : "nowrap",
        })};
    overflow: hidden;
`

const Number = styled(Tag)`
    margin-left: auto;
    padding: 0;
    font-weight: ${FontWeights.Black};
    white-space: nowrap;
    display: block !important;
`

setDefaultTheme([StyledTruncate, Number])

export { StyledTruncate, Number }
