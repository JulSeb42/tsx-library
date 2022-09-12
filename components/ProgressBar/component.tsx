/*=============================================== ProgressBar ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { ProgressBarProps } from "./types"

const ProgressBar = ({
    value,
    animated = true,
    color = "primary",
    backgroundColor,
    as,
    width = "100%",
    height = "m",
    direction = "horizontal",
    ...props
}: ProgressBarProps) => (
    <Styles.StyledProgressBar
        $value={value}
        $animated={animated}
        $color={color}
        $backgroundColor={
            !backgroundColor && color === "white"
                ? "gray-900"
                : !backgroundColor
                ? "gray-100"
                : backgroundColor
        }
        as={as}
        $direction={direction}
        $width={width}
        $height={height}
        {...props}
    />
)

export default ProgressBar
