/*=============================================== Badge types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { ColorsShortTypes } from "../../types"

interface BadgePropsBase extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    color?: ColorsShortTypes
    size?: number
}

interface BadgePropsContent1 extends BadgePropsBase {
    icon?: string | JSX.Element
    iconSize?: number
    number?: never
}

interface BadgePropsContent2 extends BadgePropsBase {
    icon?: never
    iconSize?: never
    number?: number
}

export type BadgeProps = BadgePropsContent1 | BadgePropsContent2
