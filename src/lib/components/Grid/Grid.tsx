/*=============================================== Grid component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableAllPaddings, variableSpacer } from "../../"

import * as Styles from "./styles"
import type { GridProps } from "./types"

const Grid = forwardRef(
    (
        {
            as,
            inline,
            col,
            gap = null,
            columnGap = null,
            rowGap = null,
            justifyItems = null,
            alignItems = null,
            justifyContent = null,
            alignContent = null,
            padding = null,
            children,
            style,
            ...rest
        }: GridProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const styles = {
            ...style,
            ...variableAllPaddings(padding),
            ["--grid-display" as any]: inline ? "inline-grid" : "grid",
            ["--template-col" as any]: typeof col === "string" ? col : null,
            ["--col" as any]: typeof col === "number" ? col : null,
            ["--grid-gap" as any]: variableSpacer(gap),
            ["--column-gap" as any]: variableSpacer(columnGap),
            ["--row-gap" as any]: variableSpacer(rowGap),
            ["--justify-items" as any]: justifyItems,
            ["--justify-content" as any]: justifyContent,
            ["--align-items" as any]: alignItems,
            ["--align-content" as any]: alignContent,
        }

        return (
            <Styles.StyledGrid ref={ref} as={as} style={styles} {...rest}>
                {children}
            </Styles.StyledGrid>
        )
    }
)

export default Grid
