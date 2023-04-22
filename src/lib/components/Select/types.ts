/*=============================================== Select types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

export interface SelectProps
    extends HTMLAttributes<HTMLDivElement>,
        InputBaseProps {
    as?: ElementType
    disabled?: boolean
    id?: string
    selected: string
    setSelected: (selected: string) => void
    items?: string[]
    backgroundColor?: InputBackgroundTypes
    listDirection?: ListDirectionTypes
    variant?: InputVariantTypes
    iconCaret?: string | JSX.Element
    tabIndex?: number
}
