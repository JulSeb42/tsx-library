/*=============================================== Fallback ===============================================*/

/*==================== Imports ====================*/

import styled from "styled-components"
import { stringifyPx } from "../utils"

import Variables from "../Variables"

/*==================== Component ====================*/

const Fallback = styled.div<{
    $width?: number | string
    $height?: number | string
}>`
    position: relative;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    background-color: ${Variables.Colors.Gray500};
`

export default Fallback
