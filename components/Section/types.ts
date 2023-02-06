/*=============================================== Section types ===============================================*/

import React from "react"

import { SpacersTypes } from "../../types"

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    gap?: SpacersTypes
}
