/*=============================================== Image component ===============================================*/

// Import this component for lazyloading

/*==================== Imports ====================*/

import styled from "styled-components"
import { stringifyPx } from "../../utils"

import { ObjectFitTypes } from "../../common-types"

/*==================== Component ====================*/

const Img = styled.img<{
    $width?: number | string
    $height?: number | string
    $fit?: ObjectFitTypes
}>`
    display: block;
    position: relative;
    z-index: 0;
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    object-fit: ${({ $fit }) => $fit};
`

export default Img
