/*=============================================== Youtube component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { convertYoutube } from "../../"

import * as Styles from "./styles"
import type { YoutubeProps } from "./types"

const Youtube = forwardRef(
    (
        {
            as,
            src,
            width = "100%",
            height,
            aspectRatio = "16/9",
            ...rest
        }: YoutubeProps,
        ref?: ForwardedRef<HTMLIFrameElement>
    ) => (
        <Styles.StyledYoutube
            ref={ref}
            as={as}
            src={convertYoutube(src)}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            $width={width}
            $height={height}
            $aspectRatio={aspectRatio}
            {...rest}
        />
    )
)

export default Youtube
