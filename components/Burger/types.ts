/*=============================================== Burger types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type { ColorsHoverTypes } from "../../types"

export interface BurgerProps extends HTMLAttributes<HTMLButtonElement> {
    as?: ElementType
    isOpen: boolean
    color?: ColorsHoverTypes
    width?: number
    height?: number
    noHover?: boolean
    borderWidth?: number
}
