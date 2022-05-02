// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { styleContainerProps, styleLabelProps, styleCheckProps } from "./types"

// Styles
const Container = styled.label<styleContainerProps>`
    display: inline-flex;
    align-items: center;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

    ${props =>
        props.justify &&
        css`
            justify-self: ${props.justify};
        `}
`

const Label = styled.label<styleLabelProps>`
    font-size: ${Variables.FontSizes.Body};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

    ${props =>
        props.disabled &&
        css`
            color: ${Variables.Colors.Gray500};
        `}

    ${props =>
        props.selector &&
        css`
            background-color: ${Variables.Colors.Gray100};
            transition: ${Variables.Transitions.Short};
            padding: ${Variables.Spacers.XXS} ${Variables.Spacers.S};
            border-radius: ${Variables.Radiuses.Round};

            &:hover {
                background-color: ${Variables.Colors.Primary300};
                color: ${Variables.Colors.White};
            }

            &:active {
                background-color: ${Variables.Colors.Primary600};
                color: ${Variables.Colors.White};
            }
        `}
`

const Input = styled.input`
    display: none;

    &:checked ~ .checkbox {
        background-color: ${Variables.Colors.Primary500};
        border-color: ${Variables.Colors.Primary500};

        .icon {
            display: inline-flex;
        }
    }

    &:disabled:checked ~ .checkbox {
        background-color: ${Variables.Colors.Gray200};
        border-color: ${Variables.Colors.Gray200};
        color: ${Variables.Colors.Gray800};
    }

    &:disabled ~ label {
        cursor: not-allowed;
    }

    &:checked ~ .radio:before {
        background-color: ${Variables.Colors.Primary500};
    }

    &:disabled:checked ~ .radio:before {
        background-color: ${Variables.Colors.Gray500};
    }

    &:checked ~ .toggle {
        border-color: ${Variables.Colors.Success500};

        &:before {
            left: 12px;
            background-color: ${Variables.Colors.Success500};
        }
    }

    &:disabled ~ .toggle {
        border-color: ${Variables.Colors.Gray500};
    }

    &:disabled ~ .toggle:before {
        background-color: ${Variables.Colors.Gray500};
    }

    &:checked ~ .selector {
        background-color: ${Variables.Colors.Primary500};
        color: ${Variables.Colors.White};

        &:hover {
            background-color: ${Variables.Colors.Primary300};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }

    &:disabled ~ .selector {
        cursor: not-allowed;
        background-color: ${Variables.Colors.Gray200};
        color: ${Variables.Colors.Gray500};
    }

    &:checked:disabled ~ .selector {
        background-color: ${Variables.Colors.Gray300};
        color: ${Variables.Colors.Gray600};
    }
`

const Checkbox = styled.label<styleCheckProps>`
    --size: 14px;
    width: var(--size);
    height: var(--size);
    border: 1px solid ${Variables.Colors.Primary500};
    border-radius: ${Variables.Radiuses.S};
    margin-right: ${Variables.Spacers.XXS};
    position: relative;
    color: ${Variables.Colors.White};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
        display: none;
    }

    ${props =>
        props.disabled &&
        css`
            border-color: ${Variables.Colors.Gray200};
            background-color: ${Variables.Colors.Gray50};
            color: ${Variables.Colors.Gray800};
            cursor: not-allowed;
        `}
`

const Radio = styled.label<styleCheckProps>`
    --size: 14px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 1px solid ${Variables.Colors.Primary500};
    margin-right: ${Variables.Spacers.XXS};
    position: relative;

    &:before {
        content: "";
        --size: 8px;
        width: var(--size);
        height: var(--size);
        background-color: transparent;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 50%;
    }

    ${props =>
        props.disabled &&
        css`
            border-color: ${Variables.Colors.Gray500};
            cursor: not-allowed;
        `}
`

const Toggle = styled.label<styleCheckProps>`
    width: 24px;
    height: 14px;
    display: inline-block;
    border-radius: 32px;
    border: 1px solid ${Variables.Colors.Primary500};
    margin-right: ${Variables.Spacers.XS};
    transition: ${Variables.Transitions.Short};
    position: relative;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        --size: 8px;
        width: var(--size);
        height: var(--size);
        background-color: ${Variables.Colors.Primary500};
        border-radius: 50%;
        left: 2px;
        top: calc(50% - 8px / 2);
        transition: ${Variables.Transitions.Short};
        cursor: pointer;
    }
`

export { Container, Label, Input, Checkbox, Radio, Toggle }
