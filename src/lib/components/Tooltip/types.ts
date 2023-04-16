/*=============================================== Tooltip types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

export interface TooltipProps extends HTMLAttributes<HTMLSpanElement> {
    as?: ElementType
    tooltip: string
}
