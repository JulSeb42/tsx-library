// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { stringifyPx } from "ts-utils-julseb"

// Types
import { propsImg } from "./types"

const Img = styled.img<propsImg>`
    width: ${props => (props.width ? stringifyPx(props.width) : "100%")};
    height: ${props => (props.height ? stringifyPx(props.height) : "auto")};
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
