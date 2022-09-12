/*=============================================== InputCheck types ===============================================*/

import React from "react"

import { ValidationTypes, ColorsHoverTypes } from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    label: string | JSX.Element
    disabled?: boolean
    name?: string
    validation?: ValidationTypes
    checkStyle?: "tile" | "toggle" | "selector" | undefined
    accentColor?: ColorsHoverTypes
}

interface Possible1 extends BaseProps {
    type?: "checkbox"
    iconCheck?: string
}

interface Possible2 extends BaseProps {
    type?: "radio"
    iconCheck?: never
}

export type InputCheckProps = Possible1 | Possible2
