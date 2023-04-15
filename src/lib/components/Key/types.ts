/*=============================================== Key types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { ColorsHoverTypes } from "../../types"

export interface KeyProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    keys: string[]
    withSeparator?: boolean
    accentColor?: ColorsHoverTypes
}
