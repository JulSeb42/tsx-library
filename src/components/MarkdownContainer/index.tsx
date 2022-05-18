// Imports
import React from "react"

import { props } from "./types"

import { Container } from "./styles"

const MarkdownContainer: React.FC<props> = ({
    options,
    children,
    gap,
    ...props
}) => {
    return (
        <Container options={options} gap={gap} {...props}>
            {children}
        </Container>
    )
}

export default MarkdownContainer
