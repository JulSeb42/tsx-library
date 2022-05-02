// Packages
import React from "react"

// Components
import * as Font from "../Font"
import Variables from "../Variables"
import Grid from "../Grid"

// Types
import { props } from "./types"

// Styles
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
        <Grid gap={Variables.Spacers.XXS}>
            {label && <Label htmlFor={id}>{label}</Label>}

            {helper && <Helper>{helper}</Helper>}

            {children}

            {helperBottom && <Helper bottom>{helperBottom}</Helper>}

            {validationText && validation && value.length > 0 && (
                <Font.Small>{validationText}</Font.Small>
            )}

            {(counter || maxLength) && (
                <Font.Small>
                    {value.length}
                    {maxLength && ` / ${maxLength}`}
                </Font.Small>
            )}
        </Grid>
    )
}

export default InputContainer
