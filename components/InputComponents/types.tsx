/*=============================================== Input components types ===============================================*/

import React from "react"

import { ColorsHoverTypes, ValidationTypes } from "../../utils/common-types"

export interface RightContainerProps extends React.HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    children?: any
}

export interface IconComponentProps extends React.HTMLAttributes<HTMLSpanElement> {
    disabled?: boolean
    icon: string
    accentColor?: ColorsHoverTypes
    validation?: "passed" | "not-passed"
}

export interface ValidationComponentProps {
    validation: {
        status: ValidationTypes
        iconPassed?: string
        iconNotPassed?: string
    }
}