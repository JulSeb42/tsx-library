/*=============================================== Icon types ===============================================*/

import { Props as SVGProps } from "react-inlinesvg"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface IconProps extends SVGProps {
    src: string
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}
