/*=============================================== Variant four ===============================================*/

import React from "react"

import * as Styles from "../styles"
import { LoaderProps } from "../types"

const VariantFour = ({
    color = "primary",
    size = 48,
    ...props
}: LoaderProps) => (
    <Styles.StyledLoaderFour $color={color} $size={size} {...props}>
        <span />
        <span />
        <span />
    </Styles.StyledLoaderFour>
)

export default VariantFour
