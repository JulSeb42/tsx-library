/*=============================================== Video styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledVideo = styled.video`
    display: block;
    ${Mixins.ImgSizeVar("video")};
    ${Mixins.DataFit()};
`

setDefaultTheme([StyledVideo])

export default StyledVideo
