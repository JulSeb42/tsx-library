/*=============================================== Select types ===============================================*/

import React from "react"

import { ColorsHoverTypes, ShadowsTypes } from "../../utils/common-types"
import { InputContainerProps } from "../InputContainer/types"
import { InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"
import { ListDirectionTypes } from "../ListInputs/types"

interface BaseProps
    extends React.HTMLAttributes<HTMLDivElement>,
        InputContainerProps {
    disabled?: boolean
    id: string
    children?: never
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
    inputVariant?: InputsVariantsTypes
}

interface PossibleList1 extends BaseProps {
    listVariant?: "bordered"
    listShadow?: never
}

interface PossibleList2 extends BaseProps {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type SelectProps = PossibleList1 | PossibleList2

export interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
    children?: any
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void
    isSelected: boolean
    accentColor?: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes
}
