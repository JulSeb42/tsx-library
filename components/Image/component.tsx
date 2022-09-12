/*=============================================== Image ===============================================*/

import React, { Suspense } from "react"

import Fallback from "../Fallback"

import * as Styles from "./styles"
import { ImageProps } from "./types"

const Img = React.lazy(() => import("./styles"))

const Image = ({
    src,
    alt,
    fit,
    caption,
    width = "100%",
    height = "auto",
    borderRadius,
    ...props
}: ImageProps) => {
    const img = () => (
        <Img
            src={src}
            alt={alt}
            $width={width}
            $height={height}
            $fit={fit}
            $borderRadius={!caption ? borderRadius : undefined}
            {...props}
        />
    )

    return (
        <Suspense fallback={<Fallback $width={width} $height={height} />}>
            {caption ? (
                <Styles.StyledImageContainer
                    $width={width}
                    $height={height}
                    $borderRadius={borderRadius}
                    {...props}
                >
                    {img()}

                    <Styles.Caption
                        $background={
                            typeof caption === "object"
                                ? caption.background
                                : "black"
                        }
                        as="figcaption"
                    >
                        {typeof caption === "object" ? caption.text : caption}
                    </Styles.Caption>
                </Styles.StyledImageContainer>
            ) : (
                img()
            )}
        </Suspense>
    )
}

export default Image
