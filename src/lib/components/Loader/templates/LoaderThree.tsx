/*=============================================== LoaderThree ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesAllLoaders } from "../variables-loader"

import { StyledLoaderThree } from "../styles"
import type { LoaderProps } from "../types"

const LoaderThree = forwardRef(
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
            <StyledLoaderThree
                ref={ref}
                as={as}
                style={{
                    ...variablesAllLoaders(size, borderWidth),
                    ...style,
                }}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
                <span />
            </StyledLoaderThree>
        )
    }
)

export default LoaderThree
