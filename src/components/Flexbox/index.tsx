// Packages
import styled from "@emotion/styled"

// Types
import { props } from "./types"

// Styles
const Flexbox = styled.div<props>`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
    gap: ${props => props.gap};
`

Flexbox.defaultProps = {
    align: "flex-start",
    justify: "flex-start",
    direction: "row",
    wrap: "nowrap",
    gap: 0,
}

export default Flexbox
