/*=============================================== Variant Two ===============================================*/

import React from "react"

import * as Styles from "../styles"
import { LoaderProps } from "../types"

const VariantTwo = ({
    size = 48,
    color = "primary",
    borderSize = 8,
    speed = 1200,
    ...props
}: LoaderProps) => (
    <Styles.StyledLoaderTwo
        $size={size}
        $color={color}
        $borderSize={borderSize}
        $speed={speed}
        {...props}
    />
)

export default VariantTwo
