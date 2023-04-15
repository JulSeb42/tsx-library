/*=============================================== LoaderFour ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variablesLoaderFour } from "../variables-loader"

import * as Styles from "../styles"
import type { LoaderProps } from "../types"

const LoaderFour = forwardRef(
    (
        { as, size = null, color = "primary", style, ...rest }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const styles = {
            ...variablesLoaderFour(size),
            ...style,
        }

        return (
            <Styles.StyledLoaderFour
                ref={ref}
                as={as}
                style={styles}
                $color={color}
                {...rest}
            >
                <span />
                <span />
                <span />
            </Styles.StyledLoaderFour>
        )
    }
)

export default LoaderFour
