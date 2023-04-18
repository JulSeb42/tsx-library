/*=============================================== IconMenu types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {
    ShadowsTypes,
    ColorsHoverTypes,
    ObjectPositionTypes,
    IconMenuItemProps,
    SpacersTypes,
} from "../../types"

const directions = {
    left: "left",
    up: "up",
    right: "right",
    down: "down",
} as const

export type IconMenuDirectionTypes = keyof typeof directions

interface IconMenuPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    items: IconMenuItemProps[]
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
    buttonsSize?: number
    gap?: SpacersTypes
}

interface IconMenuIconSize1 extends IconMenuPropsBase {
    icon?: "plus"
    openIconSize?: number
}

interface IconMenuIconSize2 extends IconMenuPropsBase {
    icon?: "burger"
    openIconSize?: {
        width?: number
        height?: number
        open?: never
        close?: never
    }
}

interface IconMenuIconSize3 extends IconMenuPropsBase {
    icon?: {
        open: string
        close: string
    }
    openIconSize?: {
        width?: never
        height?: never
        open?: number
        close?: number
    }
}

export type IconMenuProps =
    | IconMenuIconSize1
    | IconMenuIconSize2
    | IconMenuIconSize3
