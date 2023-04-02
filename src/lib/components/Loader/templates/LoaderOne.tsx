/*=============================================== LoaderOne ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "../styles"
import type { LoaderProps } from "../types"

const LoaderOne = forwardRef(
    (
        {
            as,
            size = 48,
            color = "primary",
            borderWidth = 8,
            speed = 1200,
            ...rest
        }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.StyledLoaderOne
            ref={ref}
            as={as}
            $size={size}
            $color={color}
            $borderWidth={borderWidth}
            $speed={speed}
            {...rest}
        />
    )
)

export default LoaderOne
