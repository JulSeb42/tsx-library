// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const Grid = styled.div<props>`
    display: ${props => (props.inline ? "inline-grid" : "grid")};
    grid-template-columns: repeat(${props => props.col}, 1fr);
    gap: ${props => props.gap};
    justify-items: ${props => props.justify};
    align-items: ${props => props.align};

    ${props =>
        props.row &&
        css`
            grid-template-rows: ${props.row};
        `}

    ${props =>
        props.area &&
        css`
            grid-template-areas: ${props.area};
        `}

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: repeat(
            ${props =>
                !props.col
                    ? 1
                    : props.col >= 6
                    ? 4
                    : props.col === 5 || props.col === 4
                    ? 3
                    : props.col === 3 || props.col === 2
                    ? 2
                    : 1},
            1fr
        );
    }

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(
            ${props => (!props.col ? 1 : props.col >= 6 ? 2 : 1)},
            1fr
        );
    }
`

Grid.defaultProps = {
    gap: Variables.Spacers.L,
    justify: "stretch",
    align: "stretch",
    col: 1,
}

export default Grid
