/*=============================================== Video component ===============================================*/

import React, { forwardRef, Suspense, lazy } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"
import { Fallback } from "../Fallback"

import type { VideoProps } from "./types"

const StyledVideo = lazy(() => import("./styles"))

const Video = forwardRef(
    (
        {
            as,
            src,
            width = "100%",
            height = "auto",
            fit,
            emptyText = "Your browser doesn't support the video tag.",
            autoPlay,
            muted,
            controls,
            type = "video/mp4",
            style,
            ...rest
        }: VideoProps,
        ref?: ForwardedRef<HTMLVideoElement>
    ) => {
        const sizeStyles = {
            ["--video-width" as any]: width && stringifyPx(width),
            ["--video-height" as any]: height && stringifyPx(height),
        }

        const styles = {
            ...sizeStyles,
            ...style,
        }

        return (
            <Suspense fallback={<Fallback style={sizeStyles} />}>
                <StyledVideo
                    ref={ref}
                    as={as}
                    autoPlay={autoPlay}
                    muted={autoPlay ? true : autoPlay}
                    controls={!autoPlay ? true : controls}
                    style={styles}
                    data-fit={fit}
                    {...rest}
                >
                    <source src={src} type={type} />
                    {emptyText}
                </StyledVideo>
            </Suspense>
        )
    }
)

export default Video
