/*=============================================== InputCheck types ===============================================*/

import React from "react"

import { ValidationTypes, ColorsHoverTypes } from "../../types"

export interface InputCheckBaseProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
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
