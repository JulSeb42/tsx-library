/*=============================================== IconMenu types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    // ShadowsTypes,
    // ColorsHoverTypes,
    // ObjectPositionTypes,
    // IconMenuItemProps,
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

export interface IconMenuProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
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
