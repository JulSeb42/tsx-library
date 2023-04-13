/*=============================================== Alert types ===============================================*/

import type { HTMLAttributes, ElementType, ReactNode } from "react"
import type {
    ColorsHoverTypes,
    PaddingTypes,
    RadiusesTypes,
    AllColorsTypes,
    SpacersTypes,
    FontSizeTypes,
    CustomFontSizeTypes,
    FontWeightTypes,
} from "../../types"

interface AlertPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    maxWidth?: number
    textColor?: AllColorsTypes
    padding?: PaddingTypes
    borderRadius?: RadiusesTypes
    borderWidth?: number
}

interface AlertPropsColor1 extends AlertPropsBase {
    color?: ColorsHoverTypes
    backgroundColor?: never
    borderColor?: never
}

interface AlertPropsColor2 extends AlertPropsBase {
    color?: never
    backgroundColor?: AllColorsTypes
    borderColor?: AllColorsTypes
}

type AlertPropsColor = AlertPropsColor1 | AlertPropsColor2

type AlertPropsContent1 = AlertPropsColor & {
    children?: string
    fontSize?: FontSizeTypes
    customFontSize?: CustomFontSizeTypes
    fontWeight?: FontWeightTypes
    gap?: never
}

type AlertPropsContent2 = AlertPropsColor & {
    children?: ReactNode | ReactNode[]
    fontSize?: never
    customFontSize?: never
    fontWeight?: never
    gap?: SpacersTypes
}

export type AlertProps = AlertPropsContent1 | AlertPropsContent2
