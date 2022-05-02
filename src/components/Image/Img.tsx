// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Types
import { propsImg } from "./types"

const Img = styled.img<propsImg>`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    z-index: 1;
    display: block;

    ${props =>
        props.fit &&
        css`
            object-fit: ${props.fit};
        `}
`

export default Img
