/*=============================================== Wrapper types ===============================================*/

import React from "react"

/*==================== List possibilities ====================*/

const templates = {
    "1col": "1col",
    "2cols": "2cols",
    "3cols": "3cols",
} as const

export type TemplateTypes = keyof typeof templates

/*==================== Component Types ====================*/

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    template?: TemplateTypes
}
