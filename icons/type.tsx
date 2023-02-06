/*=============================================== Lib icons types ===============================================*/

import { AllColorsTypes } from "../types"

export interface IconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    size?: number
    color?: AllColorsTypes
}
