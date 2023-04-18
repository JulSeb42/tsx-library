/*=============================================== Masonry styles ===============================================*/

import styled from "styled-components"

import { setDefaultTheme } from "../../utils"

const StyledMasonry = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--masonry-gap);
`

const Col = styled.div`
    display: grid;
    grid-gap: var(--masonry-gap);
    height: fit-content;
`

setDefaultTheme([StyledMasonry, Col])

export { StyledMasonry, Col }
