/*=============================================== Burger types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../types"

export interface BurgerProps extends React.HTMLAttributes<HTMLButtonElement> {
    as?: React.ElementType
    isOpen: boolean
    color?: ColorsHoverTypes
    width?: number
    height?: number
    noHover?: boolean
    borderWidth?: number
}
