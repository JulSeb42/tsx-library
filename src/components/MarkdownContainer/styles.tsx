// Packages
import styled from "@emotion/styled"
import Markdown from "markdown-to-jsx"

// Components
import Variables from "../Variables"

// Styles
const Container = styled(Markdown)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Spacers.XS};
`

export { Container }
