/*=============================================== Youtube ===============================================*/

import React from "react"
import { convertYoutube } from "ts-utils-julseb"

import * as Styles from "./styles"
import { YoutubeProps } from "./types"

const Youtube = ({
    src,
    width = "100%",
    height,
    aspectRatio = "16/9",
    ...props
}: YoutubeProps) => (
    <Styles.StyledYoutube
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
