// Imports
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import * as Mixins from "../Mixins"

import { props } from "./types"

const Flexbox = styled.div<props>`
    display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
    flex-direction: ${({ direction }) => direction};
    flex-wrap: ${({ wrap }) => wrap};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    align-content: ${({ alignContent }) => alignContent};
    ${({ gap }) => Mixins.Gap({
        gap: gap,
    })};
    padding: ${({ padding }) => (padding ? stringifyPx(padding) : 0)};
`

export default Flexbox
