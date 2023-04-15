/*=============================================== Youtube component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { convertYoutube, stringifyPx } from "../../"

import * as Styles from "./styles"
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
        const styles = {
            ...style,
            ["--width" as any]: width && stringifyPx(width),
            ["--height" as any]: height && stringifyPx(height),
        }

        return (
            <Styles.StyledYoutube
                ref={ref}
                as={as}
                src={convertYoutube(src)}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={styles}
                {...rest}
            />
        )
    }
)

export default Youtube
