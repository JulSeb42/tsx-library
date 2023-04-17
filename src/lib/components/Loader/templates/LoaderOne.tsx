/*=============================================== LoaderOne ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesAllLoaders } from "../variables-loader"

import * as Styles from "../styles"
import type { LoaderProps } from "../types"

const LoaderOne = forwardRef(
    (
        {
            as,
            size = null,
            color = "primary",
            borderWidth = null,
            style,
            ...rest
        }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        return (
            <Styles.StyledLoaderOne
                ref={ref}
                as={as}
                style={{
                    ...variablesAllLoaders(size, borderWidth),
                    ...style,
                }}
                $color={color}
                {...rest}
            />
        )
    }
)

export default LoaderOne
