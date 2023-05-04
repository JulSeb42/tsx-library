/*=============================================== InputSlider types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { ValidationTypes } from "../../types"
import type { InputBaseProps } from "../InputContainer/types"

interface InputSliderPropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    validation?: ValidationTypes
    type?: never
    showMinMax?: boolean
    min?: number
    max?: number
}

type InputSliderPropsValue1 = InputSliderPropsBase & {
    value?: number
    showValue?: "never" | "always" | "hover"
}

type InputSliderPropsValue2 = InputSliderPropsBase & {
    value?: undefined
    showValue?: never
}

export type InputSliderProps = InputSliderPropsValue1 | InputSliderPropsValue2
