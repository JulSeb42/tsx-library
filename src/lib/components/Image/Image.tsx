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
            className,
            ...rest
        }: ImageProps,
        ref?: ForwardedRef<HTMLImageElement>
    ) => {
        const sizeStyles = {
            ["--image-width" as any]: width && stringifyPx(width),
            ["--image-height" as any]: height && stringifyPx(height),
        }

        const styles = {
            ...sizeStyles,
            ...variableBorderRadius(borderRadius, "image"),
            ...style,
        }

        const img = () => (
            <Img
                ref={ref}
                as={as}
                src={src}
                alt={alt}
                style={styles}
                data-fit={fit}
                className={!caption && className}
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
                        style={styles}
                        className={caption && className}
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
