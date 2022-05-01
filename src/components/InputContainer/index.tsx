// Packages
import React from "react"
import styled from "@emotion/styled"

// Components
import * as Font from "./Font"
import Variables from "../Variables"
import Grid, { props as gridProps } from "./Grid"

// Types
interface props extends gridProps {
    id: string
    label?: string
    helper?: string
    helperBottom?: string
    validationText?: string
    validation?: string
    value?: any
    counter?: boolean
    maxLength?: number
}

// Styles
const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`

const Helper = styled(Font.P)<{ bottom?: boolean }>`
    position: relative;
    z-index: 0;
    font-size: ${props =>
        props.bottom ? Variables.FontSizes.Small : Variables.FontSizes.Body};
`

const InputContainer: React.FC<props> = props => {
    return (
        <Grid gap={Variables.Spacers.XXS}>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}

            {props.helper && <Helper>{props.helper}</Helper>}

            {props.children}

            {props.helperBottom && <Helper bottom>{props.helperBottom}</Helper>}

            {props.validationText &&
                props.validation &&
                props.value.length > 0 && (
                    <Font.Small>{props.validationText}</Font.Small>
                )}

            {(props.counter || props.maxLength) && (
                <Font.Small>
                    {props.value.length}
                    {props.maxLength && ` / ${props.maxLength}`}
                </Font.Small>
            )}
        </Grid>
    )
}

export default InputContainer
