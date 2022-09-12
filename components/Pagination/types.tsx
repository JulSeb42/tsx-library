/*=============================================== Pagination types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"

/*==================== List possibilities ====================*/

const justify = {
    left: "left",
    center: "center",
    right: "right",
} as const

export type JustifyTypes = keyof typeof justify

/*==================== Component Types ====================*/

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
}

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    color?: ColorsHoverTypes
}

interface Possible1 extends BaseButtonProps {
    isActive?: boolean
    to?: string
    content: number
    icon?: never
}

interface Possible2 extends BaseButtonProps {
    isActive?: never
    to?: never
    content: "more"
    icon?: never
}

interface Possible3 extends BaseButtonProps {
    isActive?: never
    to?: never
    content: "prev"
    icon?: string
}

interface Possible4 extends BaseButtonProps {
    isActive?: never
    to?: never
    content: "next"
    icon?: string
}

export type ButtonProps = Possible1 | Possible2 | Possible3 | Possible4
