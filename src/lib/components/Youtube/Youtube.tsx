/*=============================================== Youtube component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { convertYoutube, stringifyPx } from "../../"

import { StyledYoutube } from "./styles"
import type { YoutubeProps } from "./types"

const Youtube = forwardRef(
    (
        {
            as,
            src,
            width = "100%",
            height = "40vw",
            style,
            ...rest
        }: YoutubeProps,
        ref?: ForwardedRef<HTMLIFrameElement>
    ) => {
        return (
            <StyledYoutube
                ref={ref}
                as={as}
                src={convertYoutube(src)}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                    ["--youtube-width" as any]: width && stringifyPx(width),
                    ["--youtube-height" as any]: height && stringifyPx(height),
                    ...style,
                }}
                {...rest}
            />
        )
    }
)

export default Youtube
