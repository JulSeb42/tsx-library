/*=============================================== ButtonGroup types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"
import { ButtonGroupProps as ButtonProps } from "../../utils/component-props"

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "plain" | "transparent"
    color?: ColorsHoverTypes
    buttons: ButtonProps[]
}
