// Packages
import React, { Suspense } from "react"

// Types
import { propsComponent } from "./types"

// Styles
import { Fallback, Container, Caption } from "./styles"
const Img = React.lazy(() => import("./Img"))

const Image: React.FC<propsComponent> = ({
    width = "100%",
    height = "auto",
    className,
    fit,
    caption,
    ...props
}) => {
    return (
        <Suspense fallback={<Fallback width={width} height={height} />}>
            <Container
                width={width}
                height={height}
                className={`img-container${className ? ` ${className}` : ""}`}
            >
                <Img width={width} height={height} fit={fit} {...props} />

                {caption && <Caption>{caption}</Caption>}
            </Container>
        </Suspense>
    )
}

export default Image
