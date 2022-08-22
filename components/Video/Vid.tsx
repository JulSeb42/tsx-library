/*=============================================== Video component ===============================================*/

// Import this component for lazyloading

/*==================== Imports ====================*/

import styled from "styled-components"
import { stringifyPx } from "../../utils"

import { ObjectFitTypes } from "../../common-types"

/*==================== Component ====================*/

const Vid = styled.video<{
    $width?: string | number
    $height?: string | number
    $fit?: ObjectFitTypes
    $aspectRatio?: string
}>`
    display: block;
    object-fit: ${({ $fit }) => $fit};
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => ($height ? stringifyPx($height) : "auto")};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
`

export default Vid
