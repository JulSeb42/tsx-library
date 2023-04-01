/*=============================================== Icon types ===============================================*/

import type { Props as SVGProps } from "react-inlinesvg"

import type { AllColorsTypes } from "../../types"

export interface IconProps extends SVGProps {
    src: string
    size?: number
    color?: AllColorsTypes
}
