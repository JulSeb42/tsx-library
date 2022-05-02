// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const Aside = styled.aside<props>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap};
    align-content: start;
    grid-column: ${props =>
        props.template === "aside-left"
            ? 2
            : props.template === "aside-right"
            ? 3
            : props.template === "both-sides"
            ? 2
            : ""};

    ${props =>
        props.template === "both-sides" &&
        props.last &&
        css`
            grid-column: 4;
        `}

    @media ${Variables.Breakpoints.Tablet} {
        grid-column: 2;
    }

    ${props =>
        props.justify &&
        css`
            justify-items: ${props.justify};
        `}

    ${props =>
        props.align &&
        css`
            align-items: ${props.align};
        `}
`

Aside.defaultProps = {
    gap: Variables.Spacers.L,
}

export default Aside
