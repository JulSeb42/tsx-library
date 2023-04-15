/*=============================================== LoaderTwo ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesAllLoaders } from "../variables-loader"

import * as Styles from "../styles"
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
        const styles = {
            ...variablesAllLoaders(size, borderWidth),
            ...style,
        }

        return (
            <Styles.StyledLoaderTwo
                ref={ref}
                as={as}
                style={styles}
                $color={color}
                {...rest}
            />
        )
    }
)

export default LoaderTwo
