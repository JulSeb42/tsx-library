/*=============================================== FullBleed styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledFullBleed = styled.div`
    grid-column: 1/4 !important;
    ${Mixins.PaddingVar()};
    width: 100%;
    aspect-ratio: var(--aspect-ratio);
    height: var(--height);

    img {
        height: 100%;
    }
`

setDefaultTheme([StyledFullBleed])

export { StyledFullBleed }
