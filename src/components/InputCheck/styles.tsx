// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleContainerProps, styleLabelProps, styleCheckProps } from "./types"

const Container = styled.label<styleContainerProps>`
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
    })};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    justify-self: ${({ justify }) => justify};
`

const Label = styled.label<styleLabelProps>`
    font-size: ${Variables.FontSizes.Body};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    color: ${({ disabled }) => disabled && Variables.Colors.Gray500};

    ${({ selector }) =>
        selector &&
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
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    cursor: pointer;

    .icon {
        display: none;
    }

    ${({ disabled }) =>
        disabled &&
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

    ${({ disabled }) =>
        disabled &&
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
