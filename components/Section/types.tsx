/*=============================================== Section types ===============================================*/

import React from "react"

/*==================== List possibilities ====================*/

const sizes = {
    large: "large",
    medium: "medium",
    small: "small",
} as const

export type SizesTypes = keyof typeof sizes

/*==================== Component Types ====================*/

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: SizesTypes | number
    as?: React.ElementType
}
