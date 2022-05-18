// Imports
import styled from "styled-components"
import { stringifyPx } from "ts-utils-julseb"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { props } from "./types"

const Main = styled.main<props>`
    ${({ gap }) =>
        Mixins.Grid({
            gap: gap ? stringifyPx(gap) : "l",
            alignContent: "start",
        })};
    grid-column: ${({ col }) => (col ? col + 1 : 2)};
    justify-items: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    width: ${({ width }) =>
        width ? stringifyPx(width) : Variables.Container.MainWidth};

    @media ${Variables.Breakpoints.Tablet} {
        grid-column: 2;
        width: 100%;
    }
`

Main.defaultProps = {
    align: "start",
}

export default Main
