/*=============================================== Youtube styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledYoutube = styled.iframe<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    frameborder?: string
    allowfullscreen?: boolean
}>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => $height};
    aspect-ratio: ${({ $aspectRatio, $height }) => !$height && $aspectRatio};
`

setDefaultTheme([StyledYoutube])

export { StyledYoutube }