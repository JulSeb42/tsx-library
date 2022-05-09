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
    loaderColor,
    ...props
}) => {
    return (
        <Container backgroundColor={backgroundColor} {...props}>
            <Loader
                color={
                    backgroundColor === "white"
                        ? Variables.Colors.Primary500
                        : loaderColor === "primary"
                        ? Variables.Colors.Primary500
                        : loaderColor === "secondary"
                        ? Variables.Colors.Secondary500
                        : loaderColor === "success"
                        ? Variables.Colors.Success500
                        : loaderColor === "danger"
                        ? Variables.Colors.Danger500
                        : loaderColor === "warning"
                        ? Variables.Colors.Warning500
                        : loaderColor
                        ? loaderColor
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
