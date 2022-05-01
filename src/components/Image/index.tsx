// Packages
import React, { Suspense } from "react"

// Import styles
import { Fallback, Container, Caption, propsImg } from "./style"
const Img = React.lazy(() => import("./Img"))

// Types
interface propsComponent extends propsImg {
    width?: string | number
    height?: string | number
    className?: string
    src: string
    alt: string
    fit?: string
    caption?: string
}

const Image: React.FC<propsComponent> = props => {
    return (
        <Suspense
            fallback={
                <Fallback
                    width={props.width || "100%"}
                    height={props.height || "auto"}
                />
            }
        >
            <Container
                width={props.width || "100%"}
                height={props.height || "auto"}
                className={props.className}
            >
                <Img
                    width={props.width || "100%"}
                    height={props.height || "auto"}
                    fit={props.fit}
                    {...props}
                />

                {props.caption && <Caption>{props.caption}</Caption>}
            </Container>
        </Suspense>
    )
}

export default Image
