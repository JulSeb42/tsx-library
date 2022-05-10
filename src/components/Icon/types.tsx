// Packages
import { Props as SVGProps } from "react-inlinesvg"

// Types
export interface styleProps extends SVGProps {
    size: number
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "white"
        | "black"
        | "gray"
        | string
}

export interface props extends styleProps {
    src: string
}
