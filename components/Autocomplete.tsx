/*=============================================== Autocomplete ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import BaseInput from "./InputContainer"

/*==================== Component ====================*/

const InputFunction = ({ id, items, onClickItem, disabled, value, autoFocus, options, ...props }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setTimeout(() => setIsOpen(false), 100)

    return (
        <InputContainer>
            {options?.icon && (
                <IconContainer>
                    <Icon src={options.icon} size={20} color="primary" />
                </IconContainer>
            )}

            <StyledInput
                id={id}
                onFocus={!disabled ? handleOpen : undefined}
                onBlur={!disabled ? handleClose : undefined}
                type="text"
                $icon={!!options?.icon}
                value={value}
                autoFocus={autoFocus}
                {...props}
            />

            <List isOpen={isOpen}>
                {items.length > 0 ? (
                    items.slice(0, 20).map(item => (
                        <Item key={uuid()} onClick={onClickItem}>
                            {item}
                        </Item>
                    ))
                ) : (
                    <Item $readOnly>{options?.textEmpty}</Item>
                )}
            </List>
        </InputContainer>
    )
}
const Autocomplete = ({ id, items, onClickItem, disabled, value, autoFocus, options, ...props }: Props) =>
    options?.label || options?.helper || options?.helperBottom ? (
        <BaseInput id={id} label={options.label} helper={options.helper} helperBottom={options.helperBottom}>
            <InputFunction
                id={id}
                items={items}
                onClickItem={onClickItem}
                disabled={disabled}
                value={value}
                autoFocus={autoFocus}
                options={options}
                {...props}
            />
        </BaseInput>
    ) : (
        <InputFunction
            id={id}
            items={items}
            onClickItem={onClickItem}
            disabled={disabled}
            value={value}
            autoFocus={autoFocus}
            options={options}
            {...props}
        />
    )

export default Autocomplete

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLInputElement> {
    $icon?: boolean
}

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    items: string[] | number[]
    onClickItem: (e: React.MouseEvent<HTMLLIElement>) => void
    disabled?: boolean
    value: any
    autoFocus?: boolean

    options?: {
        label?: string
        helper?: string
        helperBottom?: string
        icon?: string
        textEmpty?: string
    }
}

/*==================== Styles ====================*/

const InputContainer = styled.div`
    position: relative;
    z-index: 10;
`

const size = 32

const StyledInput = styled.input<StyleProps>`
    width: 100%;
    height: ${size}px;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: ${Variables.Spacers.XS};
    background-color: ${Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: 5;
    position: relative;

    &:focus {
        border-color: ${Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${Variables.Colors.Gray50};
        color: ${Variables.Colors.Gray500};

        &::placeholder {
            color: ${Variables.Colors.Gray500};
        }
    }

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }

    ${({ $icon }) =>
        $icon &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: ${size}px;
    height: ${size}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    z-index: 6;

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const List = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? 0 : "4px")};
    left: 0;
    background-color: ${Variables.Colors.White};
    margin: 0;
    padding: 0;
    list-style: none;
    padding-top: ${({ isOpen }) => (isOpen ? `${size}px` : 0)};
    width: 100%;
    z-index: 2;
    overflow-y: scroll;
    border-radius: ${Variables.Radiuses.S};
    border: 1px solid ${Variables.Colors.Primary500};
    max-height: ${({ isOpen }) => (isOpen ? "150px" : 0)};
    transition: ${Variables.Transitions.Short};
`

const Item = styled.li<{ $readOnly?: boolean }>`
    padding: ${Variables.Spacers.XS};

    ${({ $readOnly }) =>
        !$readOnly
            ? css`
                  cursor: pointer;
                  transition: ${Variables.Transitions.Short};

                  @media ${Variables.Breakpoints.Hover} {
                      &:hover {
                          background-color: ${Variables.Colors.Primary500};
                          color: ${Variables.Colors.White};
                      }
                  }
              `
            : css`
                  color: ${Variables.Colors.Gray500};
              `}
`
