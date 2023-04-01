/*=============================================== SrOnly types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

export interface SrOnlyProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
}
