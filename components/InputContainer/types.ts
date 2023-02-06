/*=============================================== InputContainer types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../types"

export interface InputBaseProps {
    as?: React.ElementType
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
