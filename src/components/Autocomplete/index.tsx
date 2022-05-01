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

const Autocomplete: React.FC<props> = props => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setTimeout(() => setIsOpen(false), 500)

    return props.helper || props.helperBottom || props.label ? (
        <Grid gap={Variables.Spacers.XXS}>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}

            {props.helper && <Helper>{props.helper}</Helper>}

            <InputContainer>
                {props.icon && (
                    <IconContainer disabled={props.disabled}>
                        <Icon name={props.icon} size={16} />
                    </IconContainer>
                )}

                <Input
                    id={props.id}
                    onFocus={handleOpen}
                    onBlur={handleClose}
                    value={props.value}
                    {...props}
                />

                <List open={isOpen}>
                    {props.items.slice(0, 20).map((item, i) => (
                        <li onMouseDown={props.onMouseDown} key={i}>
                            {item}
                        </li>
                    ))}
                </List>
            </InputContainer>

            {props.helperBottom && (
                <Helper as={Font.Small}>{props.helperBottom}</Helper>
            )}
        </Grid>
    ) : (
        <InputContainer>
            <Input
                id={props.id}
                onFocus={handleOpen}
                onBlur={handleClose}
                value={props.value}
                {...props}
            />

            <List open={isOpen}>
                {props.items.slice(0, 20).map((item, i) => (
                    <li onMouseDown={props.onMouseDown} key={i}>
                        {item}
                    </li>
                ))}
            </List>
        </InputContainer>
    )
}

export default Autocomplete
