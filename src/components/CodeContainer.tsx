// Packages
import React from "react"
import styled from "@emotion/styled"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

// Components
import Variables from "./Variables"

// Types
interface props {
    language?: string
    children: any
}

// Styles
const Container = styled(SyntaxHighlighter)`
    padding: ${Variables.Spacers.M} !important;
    overflow-x: scroll !important;
    max-width: 100% !important;
    white-space: pre;
    background-color: ${Variables.Colors.Gray800};

    code {
        padding: 0 !important;
        white-space: pre !important;
    }

    & > * {
        white-space: pre !important;
    }
`

const CodeContainer: React.FC<props> = props => {
    return (
        <Container language={props.language} style={atomOneDark} {...props}>
            {props.children}
        </Container>
    )
}

export default CodeContainer
