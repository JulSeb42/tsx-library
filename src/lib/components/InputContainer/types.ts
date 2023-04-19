/*=============================================== InputContainer types ===============================================*/

import type { ElementType } from "react"

import type { AllColorsTypes } from "../../types"

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
          }
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
    className?: string
}
