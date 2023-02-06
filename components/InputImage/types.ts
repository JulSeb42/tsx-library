/*=============================================== InputImage types ===============================================*/

import React from "react"

import { ValidationTypes, ColorsHoverTypes, RadiusesTypes } from "../../types"
import { InputBaseProps } from "../InputContainer/types"

export interface InputImageProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    validation?: ValidationTypes
    width?: number | string
    height?: number | string
    iconSize?: number
    value?: never
    accentColor?: ColorsHoverTypes
    borderRadius?: RadiusesTypes
    id: string

    img: {
        src: string
        alt?: string
    }

    icons?: {
        empty?: string
        hover?: string
    }
}
