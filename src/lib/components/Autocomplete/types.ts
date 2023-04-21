/*=============================================== Autocomplete types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type {
    IconInputProps,
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

interface AutocompletePropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps,
        ValidationComponentProps,
        IconInputProps {
    items: string[]
    value: string
    setValue: (value: string) => void
    emptyText?: string
    backgroundColor?: InputBackgroundTypes
    listDirection?: ListDirectionTypes
    variant?: InputVariantTypes
    fuzzyOptions?: any
    iconClear?: string | JSX.Element
}

interface AutocompletePropsKeys1 extends AutocompletePropsBase {
    focusKeys?: string[]
    showKeys?: boolean
}

interface AutocompletePropsKeys2 extends AutocompletePropsBase {
    focusKeys?: undefined | null
    showKeys?: never
}

export type AutocompleteProps = AutocompletePropsKeys1 | AutocompletePropsKeys2
