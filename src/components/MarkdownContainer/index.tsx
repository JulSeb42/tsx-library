// Imports
import React from "react"

import optionsMarkdown from "../optionsMarkdown"

import { props } from "./types"

import { Container } from "./styles"

const MarkdownContainer: React.FC<props> = ({
    options = optionsMarkdown,
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
