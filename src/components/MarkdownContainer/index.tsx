// Packages
import React from "react"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const MarkdownContainer: React.FC<props> = ({
    options,
    children,
    ...props
}) => {
    return (
        <Container options={options} {...props}>
            {children}
        </Container>
    )
}

export default MarkdownContainer
