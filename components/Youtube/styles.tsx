/*=============================================== Youtube styles ===============================================*/

import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

const StyledYoutube = styled.iframe<{
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    frameborder?: string
    allowfullscreen?: boolean
}>`
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => $height};
    aspect-ratio: ${({ $aspectRatio, $height }) =>
        $aspectRatio ? $aspectRatio : !$height && !$aspectRatio ? "16/9" : ""};
`

export { StyledYoutube }
