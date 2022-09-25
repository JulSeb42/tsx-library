/*=============================================== Timepicker types ===============================================*/

import React from "react"

import { InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"
import { InputContainerProps } from "../InputContainer/types"
import { ShadowsTypes, ValidationTypes } from "../../utils/common-types"
import { ListDirectionTypes } from "../ListInputs/types"

type MinMaxType = {
    minTime: number
    maxTime: number
}

interface BaseProps
    extends React.HTMLAttributes<HTMLDivElement>,
        InputContainerProps {
    minTime?: number
    maxTime?: number
    step?: 1 | 0.5
    id: string
    children?: never
    chevronIcon?: string
    backgroundColor?: InputBackgroundTypes
    disabled?: boolean
    listDirection?: ListDirectionTypes
    iconSize?: number
    inputVariant?: InputsVariantsTypes
}

interface PossibleList1 extends BaseProps {
    listVariant?: "bordered"
    listShadow?: never
}

interface PossibleList2 extends BaseProps {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

type PossibleList = PossibleList1 | PossibleList2

export type SingleTimepickerProps = PossibleList & {
    variant?: "single"
    selectedTime: number
    setSelectedTime: (selectedTime: number) => void
    validation?: {
        status: ValidationTypes
        iconPassed?: string
        iconNotPassed?: string
    }
    icon?: string
}

export type MultiTimepickerProps = PossibleList & {
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

export type TimepickerProps = SingleTimepickerProps | MultiTimepickerProps
