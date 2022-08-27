/*=============================================== Hr ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { HrProps } from "./types"

const Hr = ({ color = "gray-200", height = 1, ...props }: HrProps) => (
    <Styles.StyledHr $color={color} $height={height} {...props} />
)

export default Hr
