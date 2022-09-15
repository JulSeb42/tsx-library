/*=============================================== Autocomplete types ===============================================*/

import React from "react"

import { ShadowsTypes } from "../../utils/common-types"
import { InputContainerProps } from "../InputContainer/types"
import { ValidationProps, InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"
import { ListDirectionTypes } from "../ListInputs/types"

export interface BaseProps
    extends React.HTMLAttributes<HTMLInputElement>,
        InputContainerProps,
        ValidationProps {
    id: string
    items: string[]
    disabled?: boolean
    value: string
    setValue: (value: string) => void
    autoFocus?: boolean
    children?: never
    icon?: string
    iconSize?: number
    emptyText?: string
    backgroundColor?: InputBackgroundTypes
    listDirection?: ListDirectionTypes
    variant?: InputsVariantsTypes
}

interface PossibleList1 extends BaseProps {
    listVariant?: "bordered"
    listShadow?: never
}

interface PossibleList2 extends BaseProps {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type AutocompleteProps = PossibleList1 | PossibleList2
