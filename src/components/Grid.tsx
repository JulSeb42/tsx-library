// Packages
import { HTMLAttributes } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "./Variables"

// Types
export interface props extends HTMLAttributes<HTMLDivElement> {
    inline?: boolean
    col?: number
    gap?: string | number
    justify?: string
    align?: string
    row?: string
    area?: string
}

// Styles
const Grid = styled.div<props>`
    display: ${props => (props.inline ? "inline-grid" : "grid")};
    grid-template-columns: repeat(${props => (props.col ? props.col : 1)}, 1fr);
    gap: ${props => props.gap || Variables.Spacers.L};
    justify-items: ${props => props.justify || "stretch"};
    align-items: ${props => props.align || "stretch"};

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

export default Grid
