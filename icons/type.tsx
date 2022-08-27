/*=============================================== Icon types ===============================================*/

import { LibColorsTypes, ColorsShortTypes } from "../utils/common-types"

export interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: LibColorsTypes | ColorsShortTypes | string
}
