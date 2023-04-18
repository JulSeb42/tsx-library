/*=============================================== BackToTop types ===============================================*/

import type { ButtonHTMLAttributes, ElementType } from "react"

import type { ColorsHoverTypes } from "../../types"
import type { ButtonIconVariantTypes } from "../ButtonIcon/types"

export interface BackToTopProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    icon?: string
    color?: ColorsHoverTypes
    variant?: ButtonIconVariantTypes
    text?: string
    showText?: boolean | "always" | "hover"
}
