/*=============================================== Sticky styles ===============================================*/

import styled from "styled-components"

import Mixins from "../../Mixins"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { SpacersTypes } from "../../utils/common-types"

const StyledSticky = styled.div<{ $top?: SpacersTypes | number; ref?: any }>`
    position: -webkit-sticky;
    position: sticky;
    top: ${({ $top }) => Mixins.Spacers({ $spacer: $top })};
`

setDefaultTheme([StyledSticky])

export { StyledSticky }
