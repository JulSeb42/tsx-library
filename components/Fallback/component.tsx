/*=============================================== Fallback ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { setDefaultTheme } from "../../utils"

const Fallback = styled.div<{
    $width?: number | string
    $height?: number | string
}>`
    position: relative;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    background-color: ${({ theme }) => theme.Gray500};
`

setDefaultTheme([Fallback])

export default Fallback
