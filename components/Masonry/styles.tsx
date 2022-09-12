/*=============================================== Masonry styles ===============================================*/

import styled from "styled-components"

import {} from "../../Variables"
import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SpacersTypes } from "../../utils/common-types"

const StyledMasonry = styled.div<{
    $col?: number
    $gap?: SpacersTypes | number
}>`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${({ $gap }) => Mixins.Spacers({ $spacer: $gap })};
`

const Col = styled.div<{ $gap?: SpacersTypes | number }>`
    display: grid;
    grid-gap: ${({ $gap }) => Mixins.Spacers({ $spacer: $gap })};
    height: fit-content;
`

setDefaultTheme([StyledMasonry, Col])

export { StyledMasonry, Col }
