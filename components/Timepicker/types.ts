/*=============================================== Timepicker types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { ShadowsTypes } from "../../types"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
    IconInputProps,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

type TimepickerPropsBase = InputHTMLAttributes<HTMLInputElement> &
    InputBaseProps &
    IconInputProps &
    ValidationComponentProps & {
        step?: 1 | 0.5
        chevronIcon?: string
        backgroundColor?: InputBackgroundTypes
        listDirection?: ListDirectionTypes
        inputVariant?: InputVariantTypes
        minTime?: number
        maxTime?: number
        selectedTime: number
        setSelectedTime: (selectedTime: number) => void
    }

type TimepickerList1 = TimepickerPropsBase & {
    listVariant?: "bordered"
    listShadow?: never
}

type TimepickerList2 = TimepickerPropsBase & {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type TimepickerProps = TimepickerList1 | TimepickerList2
