/*=============================================== Alert types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"
import type { ColorsHoverTypes } from "../../types"

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    color?: ColorsHoverTypes
    isModal?: boolean
}
