/*=============================================== Select types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { ShadowsTypes } from "../../types"
import type { InputBaseProps } from "../InputContainer/types"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"
import type { ListDirectionTypes } from "../ListInputs/types"

interface SelectPropsBase
    extends HTMLAttributes<HTMLDivElement>,
        InputBaseProps {
    as?: ElementType
    disabled?: boolean
    id?: string
    selected: string
    setSelected: (selected: string) => void
    icon?:
        | string
        | {
              name?: string | JSX.Element
              hasAnimation?: boolean
          }
    items?: string[]
    backgroundColor?: InputBackgroundTypes
    listDirection?: ListDirectionTypes
    inputVariant?: InputVariantTypes
}

interface SelectPropsList1 extends SelectPropsBase {
    listVariant?: "bordered"
    listShadow?: never
}

interface SelectPropsList2 extends SelectPropsBase {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type SelectProps = SelectPropsList1 | SelectPropsList2
