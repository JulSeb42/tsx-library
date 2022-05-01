// Packages
import { HTMLAttributes } from "react"
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
interface props extends HTMLAttributes<HTMLHRElement> {
    color?: string
    height?: number
}

// Styles
const Hr = styled.hr<props>`
    border: none;
    width: 100%;
    height: ${props => (props.height ? `${props.height}px` : "1px")};
    background-color: ${props => props.color || Variables.Colors.Gray200};
    margin: 0;
`

export default Hr
