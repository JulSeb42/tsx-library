// Packages
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"
import Icon from "./Icon"

// Types
interface styleContainerProps extends React.HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
    justify?: string
}

interface styleLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
    selector?: boolean
}

interface styleCheckProps extends React.HTMLAttributes<HTMLLabelElement> {
    disabled?: boolean
}

interface props extends React.HTMLAttributes<HTMLInputElement> {
    disabled?: boolean
    selector?: boolean
    toggle?: boolean
    label: string
    justify?: string
    type?: string
    icon?: string
    name?: string
}

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

const InputCheck: React.FC<props> = props => {
    return props.selector ? (
        <Container justify={props.justify} disabled={props.disabled} as="span">
            <Input
                type={props.type || "checkbox"}
                id={props.id}
                defaultChecked={props.defaultChecked}
                name={props.name}
                {...props}
            />

            <Label
                disabled={props.disabled}
                defaultChecked={props.defaultChecked}
                selector={props.selector}
                className="selector"
                htmlFor={props.id}
            >
                {props.label}
            </Label>
        </Container>
    ) : props.toggle ? (
        <Container justify={props.justify} disabled={props.disabled}>
            <Input type={props.type || "checkbox"} id={props.id} {...props} />

            <Toggle
                className="toggle"
                htmlFor={props.id}
                disabled={props.disabled}
            />

            <Label
                disabled={props.disabled}
                selector={props.selector}
                htmlFor={props.id}
            >
                {props.label}
            </Label>
        </Container>
    ) : (
        <Container
            justify={props.justify}
            disabled={props.disabled}
            htmlFor={props.id}
        >
            <Input type={props.type || "checkbox"} id={props.id} {...props} />

            {props.type === "checkbox" && (
                <Checkbox
                    className="checkbox"
                    htmlFor={props.id}
                    disabled={props.disabled}
                >
                    {props.icon ? (
                        <Icon name={props.icon} size={14} />
                    ) : (
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http:www.w3.org/2000/svg"
                            className="icon"
                        >
                            <path
                                d="M5.83334 9.09183L3.91242 7.17092L3.08759 7.99575L5.83334 10.7415L11.4958 5.07908L10.6709 4.25425L5.83334 9.09183Z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </Checkbox>
            )}

            {props.type === "radio" && (
                <Radio
                    className="radio"
                    htmlFor={props.id}
                    disabled={props.disabled}
                />
            )}

            {props.label && (
                <Label disabled={props.disabled} htmlFor={props.id}>
                    {props.label}
                </Label>
            )}
        </Container>
    )
}

export default InputCheck
