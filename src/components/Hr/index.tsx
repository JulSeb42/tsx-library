// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const Hr = styled.hr<props>`
    border: none;
    width: 100%;
    height: ${props => (props.height ? props.height : 1)}px;
    background-color: ${props => props.color};
    margin: 0;
`

Hr.defaultProps = {
    color: Variables.Colors.Gray200,
}

export default Hr
