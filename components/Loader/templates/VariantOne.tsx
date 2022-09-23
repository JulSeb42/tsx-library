/*=============================================== Variant one ===============================================*/

import React from "react"

import * as Styles from "../styles"
import { LoaderProps } from "../types"

const VariantOne = ({
    color = "primary",
    size = 48,
    borderSize = 8,
    speed = 1200,
    ...props
}: LoaderProps) => (
    <Styles.StyledLoaderOne
        $borderSize={borderSize}
        $color={color}
        $size={size}
        $speed={speed}
        {...props}
    />
)

export default VariantOne
