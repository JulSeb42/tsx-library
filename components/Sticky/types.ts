/*=============================================== Sticky types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../types"

export interface StickyProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    top?: SpacersTypes
}
