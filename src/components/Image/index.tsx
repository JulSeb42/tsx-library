// Imports
import React, { Suspense } from "react"

import { props } from "./types"

import { Container, Fallback, Caption } from "./styles"
const Img = React.lazy(() => import("./Img"))

const Image: React.FC<props> = ({
    src,
    alt,
    width,
    height,
    fit,
    caption,
    ...props
}) => {
    return (
        <Suspense fallback={<Fallback width={width} height={height} />}>
            <Container width={width} height={height}>
                <Img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    fit={fit}
                    {...props}
                />

                {caption && <Caption>{caption}</Caption>}
            </Container>
        </Suspense>
    )
}

export default Image
