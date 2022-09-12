/*=============================================== Variant Three ===============================================*/

import React from "react"

import * as Styles from "../styles"
import { LoaderProps } from "../types"

const VariantThree = ({
    size = 48,
    color = "primary",
    borderSize = 8,
    speed = 1200,
    ...props
}: LoaderProps) => (
    <Styles.StyledLoaderThree
        $size={size}
        $color={color}
        $borderSize={borderSize}
        $speed={speed}
        {...props}
    >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </Styles.StyledLoaderThree>
)

export default VariantThree
