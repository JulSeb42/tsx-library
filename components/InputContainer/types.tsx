/*=============================================== InputContainer types ===============================================*/

import { ReactNode } from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../utils/common-types"

export interface InputContainerProps {
    id: string
    label?: string
    helper?: string
    helperBottom?:
        | string
        | {
              text: string
              icon?: string
              iconColor?: AllColorsTypes
          }
    children?: ReactNode | ReactNode[] | JSX.Element | JSX.Element[]
    accentColor?: ColorsHoverTypes
}

export interface ExtendedInputContainerProps extends InputContainerProps {
    counter?: boolean
    maxLength?: number
    value?: any
}
