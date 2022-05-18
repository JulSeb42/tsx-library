// Imports
import { Props as SVGProps } from "react-inlinesvg"

export interface styleProps extends SVGProps {
    size: number
}

export interface props extends styleProps {
    src: string
}
