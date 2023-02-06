/*=============================================== Masonry types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../types"

export interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    col?: number
    gap?: SpacersTypes
}
