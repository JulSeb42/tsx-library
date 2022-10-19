/*=============================================== IconMenu types ===============================================*/

import React from "react"

import {
    ShadowsTypes,
    ColorsHoverTypes,
    ObjectPositionTypes,
} from "../../utils/common-types"
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
    position?: ObjectPositionTypes
    color?: ColorsHoverTypes
}
