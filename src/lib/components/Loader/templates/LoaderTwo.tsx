/*=============================================== LoaderTwo ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesAllLoaders } from "../variables-loader"

import { StyledLoaderTwo } from "../styles"
import type { LoaderProps } from "../types"

const LoaderTwo = forwardRef(
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
            <StyledLoaderTwo
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

export default LoaderTwo
