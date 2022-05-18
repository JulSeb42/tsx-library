// Imports
import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import { styleProps } from "./types"

const Img = styled.img<styleProps>`
    width: ${({ width }) => (width ? stringifyPx(width) : "100%")};
    height: ${({ height }) => (height ? stringifyPx(height) : "auto")};
    position: relative;
    z-index: 1;
    display: block;
    object-fit: ${({ fit }) => fit};
`

export default Img
