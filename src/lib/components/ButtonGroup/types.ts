/*=============================================== ButtonGroup types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type {
    ButtonGroupProps as ButtonProps,
    ColorsHoverTypes,
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
    buttonsSize?: ButtonSizesTypes
}
