/*=============================================== InputContainer types ===============================================*/

import type { ElementType } from "react"

import {
    // AllColorsTypes, ColorsHoverTypes
    AllColorsTypes,
    ColorsHoverTypes,
} from "../../types"

export interface InputBaseProps {
    as?: ElementType
    id?: string
    label?: string
    helper?: string
    helperBottom?:
        | undefined
        | string
        | {
              text?: string | undefined
              icon?: string
              iconColor?: AllColorsTypes
              color?: AllColorsTypes
              style?: "default" | "italic"
          }
    accentColor?: ColorsHoverTypes
}

export interface ExtendedInputContainerProps extends InputBaseProps {
    counter?: boolean
    maxLength?: number
}

export interface InputContainerProps
    extends InputBaseProps,
        ExtendedInputContainerProps {
    children?: any
    value?: any
}
