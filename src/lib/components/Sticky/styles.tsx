/*=============================================== Sticky styles ===============================================*/

import styled from "styled-components"

import { Spacers } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledSticky = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: var(--sticky-top, ${Spacers.S});
`

setDefaultTheme([StyledSticky])

export { StyledSticky }
