/*=============================================== Datepicker types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { ShadowsTypes } from "../../types"
import type {
    InputBackgroundTypes,
    ValidationComponentProps,
    InputVariantTypes,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

interface DatepickerPropsBase
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
