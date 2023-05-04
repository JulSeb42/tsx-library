/*=============================================== Main types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

const mainSizes = {
    default: "default",
    large: "large",
    form: "form",
    full: "full",
} as const

export type MainSizeTypes = keyof typeof mainSizes | number

interface BaseMainProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    minHeight?: string | number
}

interface MainSize1 extends BaseMainProps {
    size?: "default" | "large" | "form" | number
    contentSize?: never
}

interface MainSize2 extends BaseMainProps {
    size?: "full"
    contentSize?: "default" | "large" | "form" | number
}

export type MainProps = MainSize1 | MainSize2
