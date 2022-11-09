/*=============================================== InputCounter types ===============================================*/

import React from "react"

import { InputContainerProps } from "../InputContainer/types"
import { InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"

interface BaseProps
    extends React.HTMLAttributes<HTMLElement>,
        InputContainerProps {
    id: string
    children?: never
    value: number
    setValue: (value: number) => void
    disabled?: boolean

    step?: number
    min?: number
    max?: number

    icons?: {
        minus?: string
        plus?: string
    }

    labelButtons?: {
        minus?: string
        plus?: string
    }
    showButtonsLabels?: boolean
}

interface Possible1 extends BaseProps {
    buttons?: {
        variant?: "plain"
        hoverBackground?: never
    }
}

interface Possible2 extends BaseProps {
    buttons?: {
        variant?: "transparent"
        hoverBackground?: boolean
    }
}

type PossibleButtons = Possible1 | Possible2

type PossibleInput1 = PossibleButtons & {
    isInputEditable?: true
    backgroundColorInput?: InputBackgroundTypes
    inputVariant?: InputsVariantsTypes
}

type PossibleInput2 = PossibleButtons & {
    isInputEditable?: false
    backgroundColorInput?: never
    inputVariant?: never
}

export type InputCounterProps = PossibleInput1 | PossibleInput2
