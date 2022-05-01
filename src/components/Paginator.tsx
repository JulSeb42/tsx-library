// Packages
import React from "react"
import styled from "@emotion/styled"

// Components
import * as Font from "./Font"
import Variables from "./Variables"
import Flexbox from "./Flexbox"
import Icon from "./Icon"

// Types
interface props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handlePrev: (event: React.MouseEvent<HTMLElement>) => void
    handleNext: (event: React.MouseEvent<HTMLElement>) => void
    active: number
    totalPages: number
    justify?: string
    customIconPrev?: string
    customIconNext?: string
}

// Styles
const Input = styled.input`
    border: 1px solid ${Variables.Colors.Gray200};
    font-size: ${Variables.FontSizes.Body};
    width: 32px;
    border-radius: ${Variables.Radiuses.XS};
    padding: ${Variables.Spacers.XXS};
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const Button = styled.button`
    padding: 0;
    --size: 24px;
    width: var(--size);
    height: var(--size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary300};
        background-color: ${Variables.Colors.Gray50};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};

        &:hover {
            color: ${Variables.Colors.Gray500};
            background-color: transparent;
        }
    }
`

const Paginator: React.FC<props> = props => {
    return (
        <Flexbox
            as={Font.P}
            align="center"
            justify={props.justify}
            gap={Variables.Spacers.XS}
        >
            Page
            <Input
                type="number"
                onChange={props.handleChange}
                value={props.active}
                min={1}
                max={props.totalPages}
            />
            of {props.totalPages}
            <Button
                onClick={props.handlePrev}
                disabled={props.active === 1 && true}
            >
                {props.customIconPrev ? (
                    <Icon name={props.customIconPrev} size={24} />
                ) : (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.1465 6.293L8.4395 12L14.1465 17.707L15.5605 16.293L11.2675 12L15.5605 7.707L14.1465 6.293Z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </Button>
            <Button
                onClick={props.handleNext}
                disabled={props.active === props.totalPages && true}
            >
                {props.customIconNext ? (
                    <Icon name={props.customIconNext} size={24} />
                ) : (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.8535 17.707L15.5605 12L9.8535 6.293L8.4395 7.707L12.7325 12L8.4395 16.293L9.8535 17.707Z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </Button>
        </Flexbox>
    )
}

export default Paginator
