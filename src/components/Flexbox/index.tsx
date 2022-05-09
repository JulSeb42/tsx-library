// Packages
import styled from "@emotion/styled"
import { stringifyPx } from "ts-utils-julseb"

// Types
import { props } from "./types"

// Styles
const Flexbox = styled.div<props>`
    display: flex;
    align-items: ${props => props.align};
    justify-content: ${props => props.justify};
    flex-direction: ${props => props.direction};
    flex-wrap: ${props => props.wrap};
    gap: ${props => props.gap ? stringifyPx(props.gap) : 0};
`

Flexbox.defaultProps = {
    align: "flex-start",
    justify: "flex-start",
    direction: "row",
    wrap: "nowrap",
}

export default Flexbox
