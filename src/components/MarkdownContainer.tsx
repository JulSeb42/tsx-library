// Packages
import React from "react"
import styled from "@emotion/styled"
import Markdown from "markdown-to-jsx"

// Components
import Variables from "./Variables"

// Types
interface props {
    options?: any
    children?: any
}

// Styles
const Container = styled(Markdown)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Spacers.XS};
`

const MarkdownContainer: React.FC<props> = props => {
    return (
        <Container options={props.options} {...props}>
            {props.children}
        </Container>
    )
}

export default MarkdownContainer
