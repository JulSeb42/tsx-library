// Imports
import React from "react"

import Grid from "../Grid"
import * as Font from "../Font"

import { props } from "./types"

import { Label, Helper } from "./styles"

const InputContainer: React.FC<props> = ({
    id,
    label,
    helper,
    helperBottom,
    validationText,
    validation,
    value,
    counter,
    maxLength,
    children,
}) => {
    return (
        <Grid gap="xxs">
            {label && <Label htmlFor={id}>{label}</Label>}

            {helper && <Helper>{helper}</Helper>}

            {children}

            {helperBottom && <Helper bottom>{helperBottom}</Helper>}

            {validation &&
                validationText &&
                typeof value === "string" &&
                value.length > 0 && <Font.Small>{validationText}</Font.Small>}

            {counter && maxLength && (
                <Font.Small>
                    {typeof value === "string" && value.length}
                    {maxLength && ` / ${maxLength}`}
                </Font.Small>
            )}
        </Grid>
    )
}

export default InputContainer
