/*=============================================== FullBleed types ===============================================*/

import React from "react"

import { PaddingTypes } from "../../types"

export interface FullBleedProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    height?: number | string
    aspectRatio?: string
    padding?: PaddingTypes
}
