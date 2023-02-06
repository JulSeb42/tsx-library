/*=============================================== Timepicker component ===============================================*/

import React from "react"

import { InputContainer } from "../InputContainer"
import SingleTimepicker from "./templates/Single"
import MultiTimepicker from "./templates/Multi"

import { TimepickerProps } from "./types"

const renderComponents = (props: any, variant?: "single" | "multi") => {
    switch (variant) {
        case "single":
            return <SingleTimepicker {...props} />
        case "multi":
            return <MultiTimepicker {...props} />
        default:
            return <SingleTimepicker {...props} />
    }
}

const Timepicker = ({
    id,
    label,
    helper,
    helperBottom,
    accentColor,
    variant,
    ...rest
}: TimepickerProps) => {
    const rendered = () =>
        renderComponents(
            { id, label, helper, helperBottom, accentColor, ...rest },
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

export default Timepicker
