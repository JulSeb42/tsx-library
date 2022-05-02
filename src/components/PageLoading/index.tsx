// Packages
import React from "react"

// Components
import Variables from "../Variables"
import Loader from "../Loader"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const PageLoading: React.FC<props> = ({
    backgroundColor = "primary",
    ...props
}) => {
    return (
        <Container backgroundColor={backgroundColor} {...props}>
            <Loader
                color={
                    backgroundColor === "white"
                        ? Variables.Colors.Primary500
                        : Variables.Colors.White
                }
                backgroundColor={backgroundColor}
                size={48}
                border={8}
            />
        </Container>
    )
}

export default PageLoading
