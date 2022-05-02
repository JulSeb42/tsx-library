// Packages
import React from "react"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Burger: React.FC<props> = ({
    width = 32,
    height = 24,
    color = Variables.Colors.Primary500,
    border = 2,
    ariaLabel = "Menu button",
    ...props
}) => {
    return (
        <Container
            width={width}
            height={height}
            color={color}
            border={border}
            aria-label={ariaLabel}
            {...props}
        >
            <span />
            <span />
            <span />
        </Container>
    )
}

export default Burger
