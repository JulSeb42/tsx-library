// Imports
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const Wrapper = styled.div<props>`
    ${({ template, gap }) =>
        Mixins.Grid({
            col:
                template === "2cols"
                    ? "1fr auto auto 1fr"
                    : template === "3cols"
                    ? "1fr auto auto auto 1fr"
                    : "1fr auto 1fr",
            gap: gap ? stringifyPx(gap) : "l",
        })};
    padding: ${({ padding }) =>
        padding ? stringifyPx(padding) : `${Variables.Spacers.XXL} 0`};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: 5vw 1fr 5vw;
    }
`

export default Wrapper
