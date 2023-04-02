/*=============================================== Sticky styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"
import type { SpacersTypes } from "../../types"

import { setDefaultTheme } from "../../utils"

const StyledSticky = styled.div<{ $top?: SpacersTypes }>`
    position: -webkit-sticky;
    position: sticky;
    top: ${({ $top }) => Mixins.Spacers({ $spacer: $top })};
`

setDefaultTheme([StyledSticky])

export { StyledSticky }
