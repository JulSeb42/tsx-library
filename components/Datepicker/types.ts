/*=============================================== Datepicker types ===============================================*/

import React from "react"

import { ShadowsTypes } from "../../types"
import {
    InputBackgroundTypes,
    ValidationComponentProps,
    InputVariantTypes,
} from "../InputComponents/types"
import { InputBaseProps } from "../InputContainer/types"
import { ListDirectionTypes } from "../ListInputs/types"

interface DatepickerPropsBase
    extends React.InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps,
        ValidationComponentProps {
    minDate?: Date
    maxDate?: Date
    texts?: {
        weekDays?: {
            mon?: string
            tue?: string
            wed?: string
            thu?: string
            fri?: string
            sat?: string
            sun?: string
        }
        months?: {
            jan?: string
            feb?: string
            mar?: string
            apr?: string
            may?: string
            jun?: string
            jul?: string
            aug?: string
            sep?: string
            oct?: string
            nov?: string
            dec?: string
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
    calendarDirection?: ListDirectionTypes
    iconSize?: number
    inputVariant?: InputVariantTypes
}

interface DatepickerList1 extends DatepickerPropsBase {
    calendarVariant?: "bordered"
    calendarShadow?: never
}

interface DatepickerList2 extends DatepickerPropsBase {
    calendarVariant?: "shadow"
    calendarShadow?: ShadowsTypes
}

export type DatepickerProps = DatepickerList1 | DatepickerList2

export type CalendarProps = DatepickerProps & {
    isOpen?: boolean
    setIsOpen: (isOpen: boolean) => void
}
