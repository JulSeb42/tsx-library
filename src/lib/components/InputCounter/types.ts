/*=============================================== InputCounter types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { InputBackgroundTypes } from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"

interface InputCounterBase
    extends InputHTMLAttributes<HTMLInputElement>,
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

type InputCounterInput1 = InputCounterBase & {
    isInputEditable?: true
    backgroundColorInput?: InputBackgroundTypes
}

type InputCounterInput2 = InputCounterBase & {
    isInputEditable?: false
    backgroundColorInput?: never
}

export type InputCounterProps = InputCounterInput1 | InputCounterInput2
