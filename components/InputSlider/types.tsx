/*=============================================== InputSlider types ===============================================*/

import React from "react"

import { ValidationTypes, AllColorsTypes } from "../../utils/common-types"
import { InputContainerProps } from "../InputContainer/types"

interface BaseProps
    extends React.HTMLAttributes<HTMLInputElement>,
        InputContainerProps {
    id: string
    children?: never
    backgroundColor?: AllColorsTypes
    validation?: ValidationTypes
    disabled?: boolean
}

interface PossibleMinMax1 extends BaseProps {
    min?: number
    max?: number
    showMinMax?: boolean | AllColorsTypes
}

interface PossibleMinMax2 extends BaseProps {
    min?: undefined
    max?: undefined
    showMinMax?: never
}

type PossibleMinMax = PossibleMinMax1 | PossibleMinMax2

type PossibleValue1 = PossibleMinMax & {
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

type PossibleValue2 = PossibleMinMax & {
    value?: undefined
    showValue?: never
}

export type InputSliderProps = PossibleValue1 | PossibleValue2
