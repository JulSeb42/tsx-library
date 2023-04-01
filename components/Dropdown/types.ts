/*=============================================== Dropdown types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import {
    // ColorsHoverTypes
    ColorsHoverTypes,
} from "../../types"
import { ListDirectionTypes } from "../ListInputs/types"

enum justify {
    left,
    right,
}

export type DropdownJustifyTypes = keyof typeof justify

export interface DropdownContainerProps
    extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    justify?: DropdownJustifyTypes
}

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    accentColor?: ColorsHoverTypes
    direction?: ListDirectionTypes
    maxHeightOpen?: number
}
