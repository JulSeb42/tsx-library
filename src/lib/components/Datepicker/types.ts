/*=============================================== Datepicker types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type {
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

export interface DatepickerProps
    extends InputHTMLAttributes<HTMLInputElement>,
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
        prev?: string | JSX.Element
        next?: string | JSX.Element
        calendar?: string | JSX.Element
        icon?: string | JSX.Element
    }
    backgroundColor?: InputBackgroundTypes
    calendarDirection?: ListDirectionTypes
    iconSize?: number
    inputVariant?: InputVariantTypes
}

export type CalendarProps = DatepickerProps & {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}
