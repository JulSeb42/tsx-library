/*=============================================== ButtonGroup types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    ColorsHoverTypes,
    ButtonGroupProps as ButtonProps,
    RadiusesTypes,
} from "../../types"
import type { ButtonSizesTypes } from "../Button/types"

enum buttonGroupVariants {
    plain,
    transparent,
    ghost,
}

export type ButtonGroupVariantsTypes = keyof typeof buttonGroupVariants

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    variant?: ButtonGroupVariantsTypes
    color?: ColorsHoverTypes
    buttons: ButtonProps[]
    borderRadius?: RadiusesTypes
    buttonsSize?: ButtonSizesTypes
}
