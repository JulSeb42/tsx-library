/*=============================================== Fallback ===============================================*/

import styled from "styled-components"

import { Mixins } from "../../"

import { setDefaultTheme } from "../../utils"

const Fallback = styled.div<{
    $width?: number | string
    $height?: number | string
}>`
    position: relative;
    ${Mixins.ImgSizeVar()};
    background-color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([Fallback])

export default Fallback
