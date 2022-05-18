// Imports
import React from "react"

import Loader from "../Loader"

import { props } from "./types"

import { Container } from "./styles"

const PageLoading: React.FC<props> = ({
    background = "primary",
    loaderColor = "white",
    loaderSize = 48,
    loaderBorder = 8,
    speed,
    ...props
}) => {
    return (
        <Container background={background} {...props}>
            <Loader
                color={loaderColor}
                background={background}
                size={loaderSize}
                border={loaderBorder}
                speed={speed}
            />
        </Container>
    )
}

export default PageLoading
