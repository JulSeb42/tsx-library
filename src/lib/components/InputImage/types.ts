/*=============================================== InputImage types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { ValidationTypes } from "../../types"
import type { InputBaseProps } from "../InputContainer/types"

const inputSizes = { small: "small", large: "large" } as const

export type InputImageSizeTypes = keyof typeof inputSizes

export interface InputImageProps
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps {
    id: string
    img: string

    validation?: ValidationTypes
    inputSize?: InputImageSizeTypes
    value?: never

    icons?: {
        empty?: string | JSX.Element
        hover?: string | JSX.Element
        sizeEmpty?: number
        sizeHover?: number
    }
}
