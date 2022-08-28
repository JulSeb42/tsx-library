/*=============================================== InputCounter types ===============================================*/

import React from "react"

import {
    ColorsHoverTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
    value: number
    setValue: any
    id: string

    isInputEditable?: boolean

    step?: number
    min?: number
    max?: number

    icons?: {
        minus?: string
        plus?: string
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
    }
}

interface Possible1 extends BaseProps {
    buttons?: {
        variant?: "plain"
        color?: ColorsHoverTypes
        hoverBackground?: never
    }
}

interface Possible2 extends BaseProps {
    buttons?: {
        variant?: "transparent"
        color?: ColorsHoverTypes
        hoverBackground?: boolean
    }
}

export type InputCounterProps = Possible1 | Possible2
