// Packages
import React, { useState } from "react"

// Components
import * as Font from "../Font"
import Variables from "../Variables"
import Grid from "../Grid"
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import {
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
    onMouseDown,
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setTimeout(() => setIsOpen(false), 500)

    return helper || helperBottom || label ? (
        <Grid gap={Variables.Spacers.XXS}>
            {label && <Label htmlFor={id}>{label}</Label>}

            {helper && <Helper>{helper}</Helper>}

            <InputContainer>
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

                <List open={isOpen}>
                    {items.slice(0, 20).map((item, i) => (
                        <li onMouseDown={onMouseDown} key={i}>
                            {item}
                        </li>
                    ))}
                </List>
            </InputContainer>

            {helperBottom && <Helper as={Font.Small}>{helperBottom}</Helper>}
        </Grid>
    ) : (
        <InputContainer>
            <Input
                id={id}
                onFocus={handleOpen}
                onBlur={handleClose}
                value={value}
                {...props}
            />

            <List open={isOpen}>
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
