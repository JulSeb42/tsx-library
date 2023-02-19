/*=============================================== IconMenu types ===============================================*/

import React from "react"

import {
    ShadowsTypes,
    ColorsHoverTypes,
    ObjectPositionTypes,
    IconMenuItemProps,
} from "../../types"

enum directions {
    left,
    up,
    right,
    down,
}

export type IconMenuDirectionTypes = keyof typeof directions

export interface IconMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    items: IconMenuItemProps[]
    icon?:
        | "plus"
        | "burger"
        | {
              open: string
              close: string
          }
    direction?: IconMenuDirectionTypes
    shadow?:
        | ShadowsTypes
        | {
              default: ShadowsTypes
              hover: ShadowsTypes
              active: ShadowsTypes
          }
    position?: ObjectPositionTypes
    color?: ColorsHoverTypes
}
