// Packages
import { Props as SVGProps } from "react-inlinesvg"

// Types
export interface styleProps extends SVGProps {
    size: number
    color?: string
}

export interface props extends styleProps {
    src: string
}
