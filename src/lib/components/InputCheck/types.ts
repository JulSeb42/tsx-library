/*=============================================== InputCheck types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { ValidationTypes } from "../../types"

export interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string | JSX.Element
    validation?: ValidationTypes
    type?: "checkbox" | "radio"
    variant?: "tile" | "toggle" | "selector" | undefined
}
