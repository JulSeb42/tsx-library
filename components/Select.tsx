/*=============================================== Select ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import InputContainer from "./InputContainer"
import Icon from "./Icon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import Variables from "./Variables"

import { ValidationTypes } from "../common-types"
import Mixins from "./Mixins"

/*==================== Component ====================*/

const Select = ({ isOpen, setIsOpen, disabled, options, id, children, selected }: Props) => {
    return options?.label || options?.helper || options?.helperBottom ? (
        <InputContainer id={id} label={options.label} helper={options.helper} helperBottom={options.helperBottom}>
            <StyledSelect
                $isOpen={isOpen}
                disabled={disabled}
                onClick={!disabled ? () => setIsOpen(!isOpen) : ""}
                id={id}
            >
                <Selected>
                    {selected}

                    {children &&
                        (options?.icon ? <Icon src={options.icon} size={16} /> : <ChevronDownIcon size={16} />)}
                </Selected>

                <List $isOpen={isOpen}>{children}</List>
            </StyledSelect>
        </InputContainer>
    ) : (
        <StyledSelect $isOpen={isOpen} disabled={disabled} onClick={!disabled ? () => setIsOpen(!isOpen) : ""} id={id}>
            <Selected>
                {selected}

                {children && (options?.icon ? <Icon src={options.icon} size={16} /> : <ChevronDownIcon size={16} />)}
            </Selected>

            <List $isOpen={isOpen}>{children}</List>
        </StyledSelect>
    )
}

const SelectItem = ({ children, onClick, isSelected }: ItemProps) => {
    return (
        <Item $isSelected={isSelected} onClick={onClick}>
            {children}
        </Item>
    )
}

export { Select, SelectItem }

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    setIsOpen: any
    disabled?: boolean
    id: string
    children?: React.ReactNode | React.ReactNode[]
    selected: string

    options?: {
        label?: string
        helper?: string
        helperBottom?: string
        icon?: string
    }
}

interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: string | number
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void
    isSelected: boolean
}

/*==================== Styles ====================*/

const inputHeight = 32

const StyledSelect = styled.div<{ disabled?: boolean; onClick?: any; $isOpen: boolean; $validation?: ValidationTypes }>`
    position: relative;
    width: 100%;
    height: ${inputHeight}px;
    border: 1px solid ${({ $isOpen }) => ($isOpen ? Variables.Colors.Primary500 : Variables.Colors.Gray200)};
    cursor: pointer;
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: 0 ${Variables.Spacers.XS};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed" ? Variables.Colors.Danger50 : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: ${({ $isOpen }) => $isOpen ? 30 : 0};

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
            background-color: ${Variables.Colors.Gray50};
            color: ${Variables.Colors.Gray500};
        `}
`

const Selected = styled.span`
    padding: 0;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
    width: 100%;
    height: 100%;
    line-height: 100%;
    user-select: none;
`

const List = styled.div<{ $isOpen: boolean }>`
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: absolute;
    top: ${inputHeight}px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Shadows.M};
    max-height: 150px;
    overflow-y: scroll;
`

const Item = styled.span<{ $isSelected: boolean }>`
    padding: ${Variables.Spacers.XS};
    background-color: ${({ $isSelected }) => ($isSelected ? Variables.Colors.Primary500 : Variables.Colors.White)};
    color: ${({ $isSelected }) => ($isSelected ? Variables.Colors.White : Variables.Colors.Black)};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }
`
