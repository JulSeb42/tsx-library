/*=============================================== InputSlider types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { ValidationTypes } from "../../types"
import type { InputBaseProps } from "../InputContainer/types"

interface InputSliderPropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    validation?: ValidationTypes
    type?: never
}

interface InputSliderPropsMinMax1 extends InputSliderPropsBase {
    min?: number
    max?: number
    showMinMax?: boolean
}

interface InputSliderPropsMinMax2 extends InputSliderPropsBase {
    min?: undefined
    max?: undefined
    showMinMax?: never
}

type InputSliderPropsMinMax = InputSliderPropsMinMax1 | InputSliderPropsMinMax2

type InputSliderPropsValue1 = InputSliderPropsMinMax & {
    value?: number
    showValue?: "never" | "always" | "hover"
}

type InputSliderPropsValue2 = InputSliderPropsMinMax & {
    value?: undefined
    showValue?: never
}

export type InputSliderProps = InputSliderPropsValue1 | InputSliderPropsValue2
