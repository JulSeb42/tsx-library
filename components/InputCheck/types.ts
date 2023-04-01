/*=============================================== InputCheck types ===============================================*/

import type { InputHTMLAttributes } from "react"

import {
    // ValidationTypes, ColorsHoverTypes
    ValidationTypes,
    ColorsHoverTypes,
} from "../../types"

export interface InputCheckBaseProps
    extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string | JSX.Element
    validation?: ValidationTypes
    checkStyle?: "tile" | "toggle" | "selector" | undefined
    accentColor?: ColorsHoverTypes
}

interface InputCheckType1 extends InputCheckBaseProps {
    type?: "checkbox"
    iconCheck?: string
}

interface InputCheckType2 extends InputCheckBaseProps {
    type?: "radio"
    iconCheck?: never
}

export type InputCheckProps = InputCheckType1 | InputCheckType2
