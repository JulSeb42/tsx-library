/*=============================================== Youtube types ===============================================*/

import React from "react"

export interface YoutubeProps extends React.HTMLAttributes<HTMLIFrameElement> {
    as?: React.ElementType
    src: string
    width?: string | number
    height?: string | number
    aspectRatio?: string
}
