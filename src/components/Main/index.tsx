// Packages
import { HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
interface props extends HTMLAttributes<HTMLElement> {
    gap?: string
    template?: string
    justify?: string
    align?: string
}

// Styles
const Main = styled.main<props>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Spacers.L};
    align-content: start;
    grid-column: ${props =>
        props.template === "aside-left" || props.template === "both-sides"
            ? 3
            : 2};

    @media ${Variables.Breakpoints.Tablet} {
        grid-column: 2;
    }

    ${props =>
        props.justify &&
        css`
            justify-items: ${props.justify};
        `};

    ${props =>
        props.align &&
        css`
            align-items: ${props.align};
        `}
`

export default Main
