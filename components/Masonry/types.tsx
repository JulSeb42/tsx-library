/*=============================================== Masonry types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../utils/common-types"

export interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {
    col?: number
    gap?: SpacersTypes | number
    children?: any
}
