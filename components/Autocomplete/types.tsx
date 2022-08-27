/*=============================================== Autocomplete types ===============================================*/

import React from "react"

import {
    ValidationTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

export interface AutocompleteProps
    extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    items: string[] | number[]
    onClickItem: (e: React.MouseEvent<HTMLLIElement>) => void
    disabled?: boolean
    value: any
    autoFocus?: boolean

    validation?: {
        status: ValidationTypes | undefined
        iconPassed?: string
        iconNotPassed?: string
    }

    options?: {
        label?: string
        helper?: string
        helperBottom?:
            | string
            | {
                  text: string
                  icon?: string
                  iconColor?: LibColorsTypes | ColorsShortTypes | string
              }
        icon?: string
        textEmpty?: string
    }
}
