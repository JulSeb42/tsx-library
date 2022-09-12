/*=============================================== InputImage types ===============================================*/

import React from "react"

import {
    ValidationTypes,
    ColorsHoverTypes,
    RadiusesTypes,
} from "../../utils/common-types"
import { InputContainerProps } from "../InputContainer/types"

export interface InputImageProps
    extends React.HTMLAttributes<HTMLInputElement>,
        InputContainerProps {
    id: string
    disabled?: boolean
    validation?: ValidationTypes
    width?: number | string
    height?: number | string
    value?: never
    accentColor?: ColorsHoverTypes
    children?: never
    borderRadius?: RadiusesTypes

    img: {
        src: string
        alt?: string
    }

    icons?: {
        empty?: string
        hover?: string
    }
}
