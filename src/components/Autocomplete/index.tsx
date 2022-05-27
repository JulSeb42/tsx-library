// Imports
import React, { useState } from "react"

import * as Font from "../Font"
import Icon from "../Icon"

import { props } from "./types"

import {
    Container,
    Label,
    Helper,
    InputContainer,
    IconContainer,
    Input,
    List,
} from "./styles"

const Autocomplete: React.FC<props> = ({
    helper,
    helperBottom,
    label,
    id,
    icon,
    disabled,
    value,
    items,
    index = 10,
    onMouseDown,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setTimeout(() => setIsOpen(false), 500)

    return helper || helperBottom || label ? (
        <Container>
            {label && <Label htmlFor={id}>{label}</Label>}

            {helper && <Helper>{helper}</Helper>}

            <InputContainer index={index}>
                {icon && (
                    <IconContainer disabled={disabled}>
                        <Icon src={icon} size={16} />
                    </IconContainer>
                )}

                <Input
                    id={id}
                    onFocus={handleOpen}
                    onBlur={handleClose}
                    value={value}
                    {...props}
                />

                <List isOpen={isOpen}>
                    {items.slice(0, 20).map((item, i) => (
                        <li onMouseDown={onMouseDown} key={i}>
                            {item}
                        </li>
                    ))}
                </List>
            </InputContainer>

            {helperBottom && <Helper as={Font.Small}>{helperBottom}</Helper>}
        </Container>
    ) : (
        <InputContainer index={index}>
            <Input
                id={id}
                onFocus={handleOpen}
                onBlur={handleClose}
                value={value}
                {...props}
            />

            <List isOpen={isOpen}>
                {items.slice(0, 20).map((item, i) => (
                    <li onMouseDown={onMouseDown} key={i}>
                        {item}
                    </li>
                ))}
            </List>
        </InputContainer>
    )
}

export default Autocomplete
