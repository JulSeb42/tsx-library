/*=============================================== Dropdown types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"
import { ListDirectionTypes } from "../ListInputs/types"

/*==================== List possibilities ====================*/

const justify = {
    left: "left",
    right: "right",
} as const

export type JustifyTypes = keyof typeof justify

/*==================== Component Types ====================*/

export interface DropdownContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    accentColor?: ColorsHoverTypes
    direction?: ListDirectionTypes
}
