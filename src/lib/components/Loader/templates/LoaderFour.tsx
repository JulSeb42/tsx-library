/*=============================================== LoaderFour ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesLoaderFour } from "../variables-loader"

import { StyledLoaderFour } from "../styles"
import type { LoaderProps } from "../types"

const LoaderFour = forwardRef(
    (
        { as, size = null, color = "primary", style, ...rest }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        return (
            <StyledLoaderFour
                ref={ref}
                as={as}
                style={{
                    ...variablesLoaderFour(size),
                    ...style,
                }}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
            </StyledLoaderFour>
        )
    }
)

export default LoaderFour
