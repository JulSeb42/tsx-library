/*=============================================== Select types ===============================================*/

import React from "react"

import { ShadowsTypes, ColorsHoverTypes } from "../../types"
import { InputBaseProps } from "../InputContainer/types"
import {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"
import { ListDirectionTypes } from "../ListInputs/types"

interface SelectPropsBase
    extends React.HTMLAttributes<HTMLDivElement>,
        InputBaseProps {
    as?: React.ElementType
    disabled?: boolean
    id?: string
    selected: string
    setSelected: (selected: string) => void
    icon?:
        | string
        | {
              name: string
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
