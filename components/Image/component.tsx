/*=============================================== Image ===============================================*/

import React, { Suspense } from "react"

import Fallback from "../Fallback"

import * as Styles from "./styles"
import { ImageProps } from "./types"

const Img = React.lazy(() => import("./styles"))

const Image = ({
    src,
    alt,
    options,
    width = "100%",
    height = "auto",
    ...props
}: ImageProps) => {
    const img = () => (
        <Img
            src={src}
            alt={alt}
            $width={width}
            $height={height}
            $fit={options?.fit}
            {...props}
        />
    )

    return (
        <Suspense fallback={<Fallback $width={width} $height={height} />}>
            {options?.caption ? (
                <Styles.StyledImageContainer
                    $width={width}
                    $height={height}
                    {...props}
                >
                    {img()}

                    <Styles.Caption
                        $background={
                            typeof options.caption === "object"
                                ? options.caption.background
                                : "black"
                        }
                    >
                        {typeof options.caption === "object"
                            ? options.caption.text
                            : options.caption}
                    </Styles.Caption>
                </Styles.StyledImageContainer>
            ) : (
                img()
            )}
        </Suspense>
    )
}

export default Image
