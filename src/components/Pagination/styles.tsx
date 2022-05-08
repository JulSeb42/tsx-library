// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"

// Types
import { styleProps } from "./types"

// Styles
const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button:not(:last-of-type) {
        margin-right: ${Variables.Spacers.XS};
    }
`

const Button = styled.button<styleProps>`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    font-size: ${Variables.FontSizes.Body};
    line-height: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    font-weight: ${Variables.FontWeights.Bold};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${props =>
        props.active ? Variables.Colors.Primary500 : "none"};
    color: ${props =>
        props.active ? Variables.Colors.White : Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};
    cursor: ${props => (props.more ? "default" : "pointer")};

    &:hover {
        background-color: ${props =>
            props.more ? "transparent" : Variables.Colors.Primary300};
        color: ${props =>
            props.more ? Variables.Colors.Primary500 : Variables.Colors.White};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
        color: ${Variables.Colors.White};
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
        background-color: transparent;
    }
`

export { Pagination, Button }
