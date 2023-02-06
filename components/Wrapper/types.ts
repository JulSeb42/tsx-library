/*=============================================== Wrapper types ===============================================*/

import React from "react"
import { SpacersTypes } from "../../types"

enum templates {
    "1col",
    "2cols",
    "3cols",
}

export type TemplateType = keyof typeof templates

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    template?: TemplateType
    gap?: SpacersTypes
}
