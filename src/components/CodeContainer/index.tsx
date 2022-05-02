// Packages
import React from "react"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

// Types
import { props } from "./types"

// Styles
import { Container } from "./styles"

const CodeContainer: React.FC<props> = ({ language, children, ...props }) => {
    return (
        <Container language={language} style={atomOneDark} {...props}>
            {children}
        </Container>
    )
}

export default CodeContainer
