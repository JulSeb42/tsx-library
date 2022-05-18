// Imports
import React from "react"

import { props } from "./types"

import { Container } from "./styles"

const Burger: React.FC<props> = ({
    isOpen,
    color = "primary",
    width = 32,
    height = 24,
    border = 2,
    ariaLabel = `${isOpen ? "Close" : "Open"} menu`,
    onClick,
    ...props
}) => {
    return (
        <Container
            onClick={onClick}
            isOpen={isOpen}
            color={color}
            width={width}
            height={height}
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
