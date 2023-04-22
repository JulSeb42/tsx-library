/*=============================================== Timepicker types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type {
    TimepickerHoursTypes,
    TimepickerHalfHoursTypes,
    TimepickerQuarterHoursTypes,
    TimepickerAllTimesTypes,
} from "../../types"
import type {
    IconInputProps,
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

type TimepickerPropsBase = InputHTMLAttributes<HTMLInputElement> &
    InputBaseProps &
    IconInputProps &
    ValidationComponentProps & {
        clockIcon?: string | JSX.Element
        backgroundColor?: InputBackgroundTypes
        listDirection?: ListDirectionTypes
        inputVariant?: InputVariantTypes
    }

type TimepickerPropsHours = TimepickerPropsBase & {
    step?: "1h"
    minTime?: TimepickerHoursTypes
    maxTime?: TimepickerHoursTypes
    selectedTime: TimepickerHoursTypes
    setSelectedTime: (selectedTime: TimepickerHoursTypes) => void
}

type TimepickerPropsHalfHours = TimepickerPropsBase & {
    step?: "30min"
    minTime?: TimepickerHalfHoursTypes
    maxTime?: TimepickerHalfHoursTypes
    selectedTime: TimepickerHalfHoursTypes
    setSelectedTime: (selectedTime: TimepickerHalfHoursTypes) => void
}

type TimepickerPropsQuarterHours = TimepickerPropsBase & {
    step?: "15min"
    minTime?: TimepickerQuarterHoursTypes
    maxTime?: TimepickerQuarterHoursTypes
    selectedTime: TimepickerQuarterHoursTypes
    setSelectedTime: (selectedTime: TimepickerQuarterHoursTypes) => void
}

type TimepickerPropsAllHours = TimepickerPropsBase & {
    step?: "1min"
    minTime?: TimepickerAllTimesTypes
    maxTime?: TimepickerAllTimesTypes
    selectedTime: TimepickerAllTimesTypes
    setSelectedTime: (selectedTime: TimepickerAllTimesTypes) => void
}

export type TimepickerProps =
    | TimepickerPropsHours
    | TimepickerPropsHalfHours
    | TimepickerPropsQuarterHours
    | TimepickerPropsAllHours
