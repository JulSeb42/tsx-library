// Imports
import React from "react"

import { props as flexboxProps } from "../Flexbox/types"

export interface styleWrapperProps extends flexboxProps {
    height?: string | number
}

export interface styleContentProps extends flexboxProps {
    speed?: number
    show?: number
    active: number
}

export interface styleButtonsContainerProps extends flexboxProps {
    btnLarge?: boolean
    position?: string
    hideMobile?: boolean
}

export interface styleButtonLargeProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    position?: string
}

export interface styleDotProps extends React.HTMLAttributes<HTMLButtonElement> {
    dotSize?: number
    active?: boolean
}

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    position?: string
    btnLarge?: boolean
    hideMobile?: boolean
    btnSize?: number
    btnColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | string
}

export interface props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[]
    show?: number
    auto?: number
    controls?: boolean
    controlsLarge?: boolean
    height?: string | number
    hideButtonsMobile?: boolean
    speed?: number
    pagination?: boolean
    gapDots?: number | string
    dotSize?: number
}
