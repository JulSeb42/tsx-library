/*=============================================== Datepicker types ===============================================*/

import React from "react"

import { InputBackgroundTypes, ValidationProps, InputsVariantsTypes } from "../Input/types"
import { InputContainerProps } from "../InputContainer/types"
import { ListDirectionTypes } from "../ListInputs/types"
import { ShadowsTypes } from "../../utils/common-types"

interface BaseProps
    extends React.HTMLAttributes<HTMLDivElement>,
        InputContainerProps,
        ValidationProps {
    id: string
    children?: never
    minDate?: Date
    maxDate?: Date
    texts?: {
        weekDays?: {
            mon: string
            tue: string
            wed: string
            thu: string
            fri: string
            sat: string
            sun: string
        }
        months?: {
            jan: string
            feb: string
            mar: string
            apr: string
            may: string
            jun: string
            jul: string
            aug: string
            sep: string
            oct: string
            nov: string
            dec: string
        }
    }
    selectedDate: Date
    setSelectedDate: (selectedDate: Date) => void
    icons?: {
        prev?: string
        next?: string
        calendar?: string
        icon?: string
    }
    backgroundColor?: InputBackgroundTypes
    disabled?: boolean
    calendarDirection?: ListDirectionTypes
    iconSize?: number
    inputVariant?: InputsVariantsTypes
}

interface PossibleList1 extends BaseProps {
    calendarVariant?: "bordered"
    calendarShadow?: never
}

interface PossibleList2 extends BaseProps {
    calendarVariant?: "shadow"
    calendarShadow?: ShadowsTypes
}

export type DatepickerProps = PossibleList1 | PossibleList2

export type CalendarProps = DatepickerProps & {
    isOpen?: boolean
    setIsOpen: (isOpen: boolean) => void
}
