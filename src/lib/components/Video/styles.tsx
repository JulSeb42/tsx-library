/*=============================================== Video styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledVideo = styled.video`
    display: block;
    object-fit: var(--object-fit);
    ${Mixins.ImgSizeVar()};
`

setDefaultTheme([StyledVideo])

export default StyledVideo
