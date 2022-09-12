/*=============================================== MarkdownContainer types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../utils/common-types"

export interface MarkdownContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: SpacersTypes | string | number
    options?: any
    content: string | React.ReactNode | React.ReactNode[]
    as?: React.ElementType
}
