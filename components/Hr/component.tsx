/*=============================================== Hr ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { HrProps } from "./types"

const Hr = ({
    color = "gray-200",
    height = 1,
    width = "100%",
    ...props
}: HrProps) => (
    <Styles.StyledHr
        $color={color}
        $height={height}
        $width={width}
        {...props}
    />
)

export default Hr
