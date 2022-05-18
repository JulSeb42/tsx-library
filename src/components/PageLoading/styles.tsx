// Imports
import styled from "styled-components"

import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled.div<styleProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "center",
    })};
    background-color: ${Mixins.Background};
`

export { Container }
