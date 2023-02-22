/*=============================================== ButtonGroup types ===============================================*/

import React from "react"

import { ColorsHoverTypes, ButtonGroupProps as ButtonProps, RadiusesTypes } from "../../types"

enum buttonGroupVariants {
    plain,
    transparent,
}

export type ButtonGroupVariantsTypes = keyof typeof buttonGroupVariants

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    variant?: ButtonGroupVariantsTypes
    color?: ColorsHoverTypes
    buttons: ButtonProps[]
    borderRadius?: RadiusesTypes
}