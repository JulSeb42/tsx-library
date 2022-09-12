/*=============================================== Lib icons types ===============================================*/

import { AllColorsTypes } from "../utils/common-types"

export interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: AllColorsTypes
}
