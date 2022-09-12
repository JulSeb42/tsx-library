/*=============================================== Timepicker ===============================================*/

import React from "react"

import InputContainer from "../InputContainer"
import SingleTimePicker from "./templates/Single"
import MultiTimePicker from "./templates/Multi"

import { TimePickerProps } from "./types"

const renderComponents = (props: any, variant?: "single" | "multi") => {
    switch (variant) {
        case "single":
            return <SingleTimePicker {...props} />
        case "multi":
            return <MultiTimePicker {...props} />
        default:
            return <SingleTimePicker {...props} />
    }
}

const TimePicker = ({
    id,
    label,
    helper,
    helperBottom,
    accentColor,
    variant,
    ...props
}: TimePickerProps) => {
    const rendered = () =>
        renderComponents(
            { id, label, helper, helperBottom, accentColor, ...props },
            variant
        )

    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            accentColor={accentColor}
        >
            {rendered()}
        </InputContainer>
    ) : (
        rendered()
    )
}

export default TimePicker
