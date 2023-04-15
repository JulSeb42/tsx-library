/*=============================================== Youtube styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledYoutube = styled.iframe`
    ${Mixins.ImgSizeVar("youtube")};
`

setDefaultTheme([StyledYoutube])

export { StyledYoutube }
