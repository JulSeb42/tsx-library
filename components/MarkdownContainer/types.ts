/*=============================================== MarkdownContainer types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../types"

export interface MarkdownContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    gap?: SpacersTypes
    options?: any
    content: string | React.ReactNode | React.ReactNode[]
}
