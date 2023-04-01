/*=============================================== Icon types ===============================================*/

import { Props as SVGProps } from "react-inlinesvg"

import {
    // AllColorsTypes
    AllColorsTypes,
} from "../../types"

export interface IconProps extends SVGProps {
    src: string
    size?: number
    color?: AllColorsTypes
}
