/*=============================================== Video styles ===============================================*/

import styled from "styled-components"

import { stringifyPx } from "../../"
import type { ObjectFitTypes } from "../../types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledVideo = styled.video<{
    $width?: string | number
    $height?: string | number
    $fit?: ObjectFitTypes
    $aspectRatio?: string
}>`
    display: block;
    object-fit: ${({ $fit }) => $fit};
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
`

setDefaultTheme([StyledVideo])

export default StyledVideo
