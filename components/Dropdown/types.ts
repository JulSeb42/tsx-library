/*=============================================== Dropdown types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../types"
import { ListDirectionTypes } from "../ListInputs/types"

enum justify {
    left,
    right,
}

export type DropdownJustifyTypes = keyof typeof justify

export interface DropdownContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    justify?: DropdownJustifyTypes
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    accentColor?: ColorsHoverTypes
    direction?: ListDirectionTypes
    maxHeightOpen?: number
}
