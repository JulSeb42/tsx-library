/*=============================================== Video component ===============================================*/

// Exported as default for lazyloading

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { ObjectFitTypes } from "../../utils/common-types"

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

setDefaultTheme([Vid])

export default Vid
