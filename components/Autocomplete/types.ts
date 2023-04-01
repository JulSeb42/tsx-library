/*=============================================== Autocomplete types ===============================================*/

import type { InputHTMLAttributes } from "react"

import { ShadowsTypes } from "../../types"
import { InputBaseProps } from "../InputContainer/types"
import {
    InputVariantTypes,
    ValidationComponentProps,
    InputBackgroundTypes,
    IconInputProps,
} from "../InputComponents/types"
import { ListDirectionTypes } from "../ListInputs/types"

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
    fuzzy?:
        | false
        | {
              options?: any
          }
    highlight?: boolean
}

interface AutocompleteList1 extends AutocompletePropsBase {
    listVariant?: "bordered"
    listShadow?: never
}

interface AutocompleteList2 extends AutocompletePropsBase {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type AutocompleteProps = AutocompleteList1 | AutocompleteList2
