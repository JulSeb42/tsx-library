/*=============================================== Masonry styles ===============================================*/

import styled from "styled-components"

import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledMasonry = styled.div<{
    $gap?: SpacersTypes
}>`
    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--gap);
`

const Col = styled.div<{ $gap?: SpacersTypes }>`
    display: grid;
    grid-gap: var(--gap);
    height: fit-content;
`

setDefaultTheme([StyledMasonry, Col])

export { StyledMasonry, Col }
