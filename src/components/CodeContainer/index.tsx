// Imports
import React from "react"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { props } from "./types"

import { Container } from "./styles"

const CodeContainer: React.FC<props> = ({
    language,
    children,
    style = atomOneDark,
    ...props
}) => {
    return (
        <Container language={language} style={style} {...props}>
            {children}
        </Container>
    )
}

export default CodeContainer
