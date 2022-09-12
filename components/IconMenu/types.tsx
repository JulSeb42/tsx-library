/*=============================================== IconMenu types ===============================================*/

import React from "react"

import {
    ShadowsTypes,
    SpacersTypes,
    ColorsHoverTypes,
} from "../../utils/common-types"
import { PositionsTypes } from "../Header/types"
import { IconMenuItemProps } from "../../utils/component-props"

export interface IconMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    items: IconMenuItemProps[]
    icon?:
        | "plus"
        | {
              open: string
              close: string
          }
    direction?: "left" | "up" | "right" | "down"
    shadow?:
        | ShadowsTypes
        | {
              default: ShadowsTypes
              hover: ShadowsTypes
              active: ShadowsTypes
          }
    position?: {
        position?: PositionsTypes
        left?: number | string | SpacersTypes
        top?: number | string | SpacersTypes
        right?: number | string | SpacersTypes
        bottom?: number | string | SpacersTypes
        zIndex?: number
    }
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    color?: ColorsHoverTypes
}
