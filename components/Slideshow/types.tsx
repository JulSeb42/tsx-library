/*=============================================== Slideshow types ===============================================*/

import React from "react"

import { ColorsHoverTypes, RadiusesTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const positions = {
    left: "left",
    right: "right",
} as const

export type PositionsTypes = keyof typeof positions

/*==================== Component Types ====================*/

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    iconPrev?: string
    iconNext?: string
    prev?: boolean
    next?: boolean
    position: PositionsTypes
    hideTouch?: boolean
    isLarge?: boolean
    color?: ColorsHoverTypes
}

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[]
    borderRadius?: RadiusesTypes

    controls?:
        | boolean
        | {
              type: "small" | "large"
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
              iconPrev?: string
              iconNext?: string
          }
}

interface Possible1 extends BaseProps {
    height?: never
    aspectRatio?: string
}

interface Possible2 extends BaseProps {
    height?: string | number
    aspectRatio?: never
}

type PossibleHeight = Possible1 | Possible2

type PossiblePagination1 = PossibleHeight & {
    pagination?:
        | boolean
        | {
              variant?: "dots" | "dots-outline" | "bars"
              position?: "inside" | "outside"
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
          }

    thumbnails?: never

    options?: {
        show?: never
        autoplay?: number
        speed?: number
    }
}

type PossiblePagination2 = PossibleHeight & {
    pagination?: never
    thumbnails?: string[]

    options?: {
        show?: never
        autoplay?: number
        speed?: number
    }
}

type PossiblePagination3 = PossibleHeight & {
    pagination?: never
    thumbnails?: never

    options?: {
        show?: number
        autoplay?: number
        speed?: number
    }
}

export type SlideshowProps =
    | PossiblePagination1
    | PossiblePagination2
    | PossiblePagination3
