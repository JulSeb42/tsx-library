/*=============================================== FullBleed component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx, variableAllPaddings } from "../../"

import * as Styles from "./styles"
import type { FullBleedProps } from "./types"

const FullBleed = forwardRef(
    (
        {
            as,
            children,
            height,
            aspectRatio,
            padding = null,
            style,
            ...rest
        }: FullBleedProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const styles = {
            ...variableAllPaddings(padding, "full-bleed"),
            ["--full-bleed-aspect-ratio" as any]: aspectRatio,
            ["--full-bleed-height" as any]: height && stringifyPx(height),
            ...style,
        }

        return (
            <Styles.StyledFullBleed ref={ref} as={as} style={styles} {...rest}>
                {children}
            </Styles.StyledFullBleed>
        )
    }
)

export default FullBleed
