/*=============================================== Video styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledVideo = styled.video`
    display: block;
    object-fit: var(--video-object-fit);
    ${Mixins.ImgSizeVar("video")};
`

setDefaultTheme([StyledVideo])

export default StyledVideo
