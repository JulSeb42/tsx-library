/*=============================================== FullBleed styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledFullBleed = styled.div`
    grid-column: 1/4 !important;
    ${Mixins.PaddingVar("full-bleed")};
    width: 100%;
    aspect-ratio: var(--full-bleed-aspect-ratio);
    height: var(--full-bleed-height);

    img {
        height: 100%;
    }
`

setDefaultTheme([StyledFullBleed])

export { StyledFullBleed }
