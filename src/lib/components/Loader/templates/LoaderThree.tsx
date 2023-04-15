/*=============================================== LoaderThree ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesAllLoaders } from "../variables-loader"

import * as Styles from "../styles"
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
        const styles = {
            ...variablesAllLoaders(size, borderWidth),
            ...style,
        }

        return (
            <Styles.StyledLoaderThree
                ref={ref}
                as={as}
                style={styles}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
                <span />
            </Styles.StyledLoaderThree>
        )
    }
)

export default LoaderThree
