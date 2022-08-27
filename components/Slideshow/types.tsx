/*=============================================== Slideshow types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"

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
    height?: string | number

    options?: {
        show?: number
        autoplay?: number
        speed?: number
    }
}

interface Possible1 extends BaseProps {
    controls?: {
        type: "small" | "large"
        color?: ColorsHoverTypes
        hideTouchScreens?: boolean
        iconPrev?: string
        iconNext?: string
    }

    pagination?:
        | boolean
        | {
              color?: ColorsHoverTypes
              hideTouchScreens?: boolean
          }
}

interface Possible2 extends BaseProps {
    controls?: never

    pagination?: {
        pagination: true
        color?: ColorsHoverTypes
        hideTouchScreens?: boolean
    }
}

interface Possible3 extends BaseProps {
    controls?: {
        type: "small" | "large"
        color?: ColorsHoverTypes
        hideTouchScreens?: boolean
        iconPrev?: string
        iconNext?: string
    }

    pagination?: never
}

interface Possible4 extends BaseProps {
    controls?: never
    pagination?: never
}

export type SlideshowProps = Possible1 | Possible2 | Possible3 | Possible4
