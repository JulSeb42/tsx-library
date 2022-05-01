// Packages
import React from "react"
import styled from "@emotion/styled"

// Types
export interface props extends React.HTMLAttributes<HTMLDivElement> {
    align?: string
    justify?: string
    direction?: string
    wrap?: string
    gap?: string | number
}

// Styles
const Flexbox = styled.div<props>`
    display: flex;
    align-items: ${props => props.align || "flex-start"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-direction: ${props => props.direction || "row"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || 0};
`

export default Flexbox
