// Packages
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
interface props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
}

// Styles
const DropdownContainer = styled.div`
    position: relative;
`

const Dropdown = styled.div<props>`
    position: absolute;
    left: 0;
    top: 42px;
    list-style: none;
    background-color: ${Variables.Colors.White};
    box-shadow: ${Variables.Shadows.S};
    min-width: 150px;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: ${Variables.Radiuses.M};
    max-height: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Long};
    z-index: 10;

    & > a,
    & > button {
        padding: ${Variables.Spacers.XS};
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        font-weight: ${Variables.FontWeights.Bold};
        transition: ${Variables.Transitions.Short};
        border: none;
        background-color: transparent;
        font-size: ${Variables.FontSizes.Body};

        &:hover {
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};
        }
    }

    ${props =>
        props.isOpen &&
        css`
            max-height: 800px;
            overflow-y: scroll;
        `}
`

export { DropdownContainer, Dropdown }
