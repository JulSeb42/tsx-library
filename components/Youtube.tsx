/*=============================================== Youtube ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { convertYoutube, stringifyPx } from "../utils"

/*==================== Component ====================*/

const Youtube = ({ src, width, height, aspectRatio, ...props }: Props) => (
    <StyledYoutube
        src={convertYoutube(src)}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        $width={width}
        $height={height}
        $aspectRatio={aspectRatio}
        {...props}
    />
)

export default Youtube

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLIFrameElement> {
    $width?: string | number
    $height?: string | number
    $aspectRatio?: string
    frameborder?: string
    allowfullscreen?: boolean
}

interface Props extends React.HTMLAttributes<HTMLIFrameElement> {
    src: string
    width?: string | number
    height?: string | number
    aspectRatio?: string
}

/*==================== Styles ====================*/

const StyledYoutube = styled.iframe<StyleProps>`
    width: ${({ $width }) => ($width ? stringifyPx($width) : "100%")};
    height: ${({ $height }) => $height};
    aspect-ratio: ${({ $aspectRatio, $height }) =>
        $aspectRatio ? $aspectRatio : !$height && !$aspectRatio ? "16/9" : ""};
`
