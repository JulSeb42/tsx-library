/*=============================================== Badge types ===============================================*/

import React from "react"

import { AllColorsTypes, SpacersTypes } from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: AllColorsTypes
    textColor?: AllColorsTypes
    size?: number
    as?: React.ElementType
}

interface Possible1 extends BaseProps {
    content?: number
    padding?: SpacersTypes | number | string
}

interface Possible2 extends BaseProps {
    content?: string | undefined
    padding?: never
}

export type BadgeProps = Possible1 | Possible2
