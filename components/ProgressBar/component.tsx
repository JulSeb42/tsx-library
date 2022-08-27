/*=============================================== ProgressBar ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { ProgressBarProps } from "./types"

const ProgressBar = ({
    value,
    options = { animated: true },
    ...props
}: ProgressBarProps) => (
    <Styles.StyledProgressBar
        $value={value}
        $animated={options.animated}
        $color={options.color || "primary"}
        $backgroundColor={options.backgroundColor || "gray-100"}
        {...props}
    />
)

export default ProgressBar
