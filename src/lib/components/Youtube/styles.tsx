/*=============================================== Youtube styles ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledYoutube = styled.iframe`
    ${Mixins.ImgSizeVar()};
`

setDefaultTheme([StyledYoutube])

export { StyledYoutube }
