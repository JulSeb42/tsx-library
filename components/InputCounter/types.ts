/*=============================================== InputCounter types ===============================================*/

import React from "react"

import { InputBaseProps } from "../InputContainer/types"
import {
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"

interface InputCounterBase
    extends React.InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    value: number
    setValue: (value: number) => void
    min?: number
    max?: number
    step?: number
    type?: never

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

interface InputCounterButtons1 extends InputCounterBase {
    buttons?: {
        variant?: "plain"
        hoverBackground?: never
    }
}

interface InputCounterButtons2 extends InputCounterBase {
    buttons?: {
        variant?: "transparent"
        hoverBackground?: boolean
    }
}

type InputCounterButtons = InputCounterButtons1 | InputCounterButtons2

type InputCounterInput1 = InputCounterButtons & {
    isInputEditable?: true
    backgroundColorInput?: InputBackgroundTypes
    inputVariant?: InputVariantTypes
}

type InputCounterInput2 = InputCounterButtons & {
    isInputEditable?: false
    backgroundColorInput?: never
    inputVariant?: never
}

export type InputCounterProps = InputCounterInput1 | InputCounterInput2
