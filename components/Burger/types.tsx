/*=============================================== Burger types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"

export interface BurgerProps extends React.HTMLAttributes<HTMLButtonElement> {
    ariaLabel?: string
    isOpen: boolean
    color?: ColorsHoverTypes
    width?: number
    height?: number
}
