/*=============================================== ButtonGroup types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type {
    ButtonGroupProps as ButtonProps,
    ColorsHoverTypes,
} from "../../types"
import type { ButtonSizesTypes } from "../Button/types"

const buttonGroupVariants = {
    plain: "plain",
    transparent: "transparent",
    ghost: "ghost",
} as const

export type ButtonGroupVariantsTypes = keyof typeof buttonGroupVariants

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    variant?: ButtonGroupVariantsTypes
    color?: ColorsHoverTypes
    buttons: ButtonProps[]
    buttonsSize?: ButtonSizesTypes
}
