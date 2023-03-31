/*=============================================== Image component ===============================================*/

import { forwardRef, lazy, Suspense } from "react"
import type { ForwardedRef } from "react"

import { Fallback } from "../Fallback"

import * as Styles from "./styles"
import type { ImageProps } from "./types"

const Img = lazy(() => import("./styles"))

const Image = forwardRef(
    (
        {
            as,
            src,
            alt,
            width = "100%",
            height = "auto",
            borderRadius,
            fit,
            caption,
            ...rest
        }: ImageProps,
        ref?: ForwardedRef<HTMLImageElement>
    ) => {
        const img = () => (
            <Suspense fallback={<Fallback $width={width} $height={height} />}>
                <Img
                    ref={ref}
                    as={as}
                    src={src}
                    alt={alt}
                    $width={width}
                    $height={height}
                    $fit={fit}
                    $borderRadius={!caption ? borderRadius : undefined}
                    {...rest}
                />
            </Suspense>
        )

        return caption ? (
            <Styles.ImgContainer
                $borderRadius={borderRadius}
                as={typeof caption === "object" ? caption.asContainer : "div"}
            >
                {img()}

                <Styles.Caption
                    $background={
                        typeof caption === "object"
                            ? caption.background
                            : "black"
                    }
                >
                    {typeof caption === "object" ? caption.text : caption}
                </Styles.Caption>
            </Styles.ImgContainer>
        ) : (
            img()
        )
    }
)

export default Image
