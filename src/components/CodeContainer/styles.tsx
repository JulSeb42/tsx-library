// Imports
import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"

import Variables from "../Variables"

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

export { Container }
