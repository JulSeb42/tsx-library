/*=============================================== InputImage types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type {
    // ValidationTypes, RadiusesTypes
    ValidationTypes,
    RadiusesTypes,
} from "../../types"
import type { InputBaseProps } from "../InputContainer/types"

export interface InputImageProps
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    validation?: ValidationTypes
    width?: number | string
    height?: number | string
    iconSize?: number
    value?: never
    borderRadius?: RadiusesTypes
    id: string

    img: string

    icons?: {
        empty?: string | JSX.Element
        hover?: string | JSX.Element
    }
}
