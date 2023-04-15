/*=============================================== Image component ===============================================*/

import React, { forwardRef, Suspense, lazy } from "react"
import type { ForwardedRef } from "react"

import { Fallback } from "../Fallback"
import { variableBorderRadius, stringifyPx } from "../../"

import * as Styles from "./styles"
import type { ImageProps } from "./types"

const Img = lazy(() => import("./styles"))

const Image = forwardRef(
    (
        {
            as,
            src,
            alt,
            width,
            height,
            borderRadius = null,
            fit = null,
            caption,
            style,
            ...rest
        }: ImageProps,
        ref?: ForwardedRef<HTMLImageElement>
    ) => {
        const sizeStyles = {
            ["--image-width" as any]: width && stringifyPx(width),
            ["--image-height" as any]: height && stringifyPx(height),
        }

        const containerStyles = {
            ...sizeStyles,
            ...variableBorderRadius(borderRadius),
            ...style,
        }

        const imgStyles = {
            ["--image-object-fit" as any]: fit,
            ...containerStyles,
        }

        const img = () => (
            <Img
                ref={ref}
                as={as}
                src={src}
                alt={alt}
                style={imgStyles}
                {...rest}
            />
        )

        return (
            <Suspense fallback={<Fallback style={sizeStyles} />}>
                {caption ? (
                    <Styles.ImgContainer
                        as={
                            typeof caption === "object" && caption.asContainer
                                ? caption.asContainer
                                : "figcaption"
                        }
                        style={containerStyles}
                    >
                        {img()}

                        <Styles.Caption
                            $background={
                                typeof caption === "object"
                                    ? caption.background
                                    : "black"
                            }
                        >
                            {typeof caption === "object"
                                ? caption.text
                                : caption}
                        </Styles.Caption>
                    </Styles.ImgContainer>
                ) : (
                    img()
                )}
            </Suspense>
        )
    }
)

export default Image
