/*=============================================== InputSlider types ===============================================*/

import React from "react"

import { AllColorsTypes, ValidationTypes } from "../../types"
import { InputBaseProps } from "../InputContainer/types"

interface InputSliderPropsBase
    extends React.InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    backgroundColor?: AllColorsTypes
    validation?: ValidationTypes
    type?: never
}

interface InputSliderPropsMinMax1 extends InputSliderPropsBase {
    min?: number
    max?: number
    showMinMax?: boolean | AllColorsTypes
}

interface InputSliderPropsMinMax2 extends InputSliderPropsBase {
    min?: undefined
    max?: undefined
    showMinMax?: never
}

type InputSliderPropsMinMax = InputSliderPropsMinMax1 | InputSliderPropsMinMax2

type InputSliderPropsValue1 = InputSliderPropsMinMax & {
    value?: number
    showValue?:
        | boolean
        | {
              onlyHover?: boolean
              backgroundColor?:
                  | AllColorsTypes
                  | "overlay-black"
                  | "overlay-white"
              textColor?: AllColorsTypes
          }
}

type InputSliderPropsValue2 = InputSliderPropsMinMax & {
    value?: undefined
    showValue?: never
}

export type InputSliderProps = InputSliderPropsValue1 | InputSliderPropsValue2
