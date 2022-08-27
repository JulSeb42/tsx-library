/*=============================================== Icon ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { IconProps } from "./types"

const Icon = ({
    src,
    size = 24,
    color = "currentColor",
    ...props
}: IconProps) => (
    <Styles.StyledIcon
        src={`/icons/${src}.svg`}
        $color={color}
        $size={size}
        {...props}
    />
)

export default Icon
