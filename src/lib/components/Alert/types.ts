/*=============================================== Alert types ===============================================*/

import type { ElementType, HTMLAttributes, ReactNode } from "react"
import type { ColorsHoverTypes } from "../../types"

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    maxWidth?: number
    color?: ColorsHoverTypes
    children?: string | ReactNode | ReactNode[]
}
