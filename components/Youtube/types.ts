/*=============================================== Youtube types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

export interface YoutubeProps extends HTMLAttributes<HTMLIFrameElement> {
    as?: ElementType
    src: string
    width?: string | number
    height?: string | number
    aspectRatio?: string
}
