/*=============================================== Hr types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

export interface HrProps extends HTMLAttributes<HTMLHRElement> {
    as?: ElementType
}
