/*=============================================== InputCheck ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { InputCheckProps } from "./types"

const InputCheck = ({
    type = "radio",
    id,
    label,
    disabled,
    name,
    validation,
    iconCheck,
    checkStyle,
    ...props
}: InputCheckProps) => (
    <Styles.StyledInputCheck>
        <Styles.Input
            id={id}
            name={name}
            type={type}
            disabled={disabled}
            $validation={validation}
            $tile={checkStyle === "tile"}
            {...props}
        />

        {checkStyle === "toggle" ? (
            <Styles.Toggle
                htmlFor={id}
                $disabled={disabled}
                $validation={validation}
            >
                {label}
            </Styles.Toggle>
        ) : checkStyle === "selector" ? (
            <Styles.Selector
                htmlFor={id}
                $disabled={disabled}
                $validation={validation}
            >
                {label}
            </Styles.Selector>
        ) : type === "checkbox" ? (
            <Styles.Checkbox
                htmlFor={id}
                $tile={checkStyle === "tile"}
                $disabled={disabled}
                $validation={validation}
                $iconCheck={iconCheck}
            >
                {label}
            </Styles.Checkbox>
        ) : (
            <Styles.Radio
                htmlFor={id}
                $tile={checkStyle === "tile"}
                $disabled={disabled}
                $validation={validation}
            >
                {label}
            </Styles.Radio>
        )}
    </Styles.StyledInputCheck>
)

export default InputCheck
