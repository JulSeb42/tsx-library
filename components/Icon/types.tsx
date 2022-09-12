/*=============================================== Icon types ===============================================*/

import { Props as SVGProps } from "react-inlinesvg"

import { AllColorsTypes } from "../../utils/common-types"

export interface IconProps extends SVGProps {
    src: string
    size?: number
    color?: AllColorsTypes
}
