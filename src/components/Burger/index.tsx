// Packages
import React from "react"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const Burger: React.FC<props> = props => {
    return (
        <Container
            width={props.width}
            height={props.height}
            color={props.color}
            border={props.border}
            aria-label={props.ariaLabel || "Menu button"}
            {...props}
        >
            <span />
            <span />
            <span />
        </Container>
    )
}

export default Burger
