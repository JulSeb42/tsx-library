/*=============================================== Masonry styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledMasonry = styled.div<{
    $gap?: SpacersTypes
}>`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${({ $gap }) => Mixins.Spacers({ $spacer: $gap })};
`

const Col = styled.div<{ $gap?: SpacersTypes }>`
    display: grid;
    grid-gap: ${({ $gap }) => Mixins.Spacers({ $spacer: $gap })};
    height: fit-content;
`

setDefaultTheme([StyledMasonry, Col])

export { StyledMasonry, Col }
