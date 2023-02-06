/*=============================================== Timepicker types ===============================================*/

import React from "react"

import { ShadowsTypes, ValidationTypes } from "../../types"
import {
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
    IconInputProps,
} from "../InputComponents/types"
import { InputBaseProps } from "../InputContainer/types"
import { ListDirectionTypes } from "../ListInputs/types"

type MinMaxType = {
    minTime: number
    maxTime: number
}

type TimepickerPropsBase = React.InputHTMLAttributes<HTMLInputElement> &
    InputBaseProps & {
        step?: 1 | 0.5
        chevronIcon?: string
        backgroundColor?: InputBackgroundTypes
        listDirection?: ListDirectionTypes
        iconSize?: number
        inputVariant?: InputVariantTypes
        minTime?: number
        maxTime?: number
    }

type TimepickerList1 = TimepickerPropsBase & {
    listVariant?: "bordered"
    listShadow?: never
}

type TimepickerList2 = TimepickerPropsBase & {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

type TimepickerList = TimepickerList1 | TimepickerList2

export type TimepickerSingleProps = TimepickerList &
    IconInputProps &
    ValidationComponentProps & {
        variant?: "single"
        selectedTime: number
        setSelectedTime: (selectedTime: number) => void
    }

export type TimepickerMultiProps = TimepickerList & {
    variant?: "multi"
    selectedMinMax: MinMaxType
    setSelectedMinMax: React.Dispatch<
        React.SetStateAction<{ min: number; max: number }>
    >
    validationMin?: {
        status: ValidationTypes
        iconPassed?: string
        iconNotPassed?: string
    }
    validationMax?: {
        status: ValidationTypes
        iconPassed?: string
        iconNotPassed?: string
    }
    iconMin?: string
    iconMax?: string
}

export type TimepickerProps = TimepickerSingleProps | TimepickerMultiProps
