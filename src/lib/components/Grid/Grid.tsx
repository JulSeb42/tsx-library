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
            ...variableAllPaddings(padding, "grid"),
            // ["--grid-display" as any]: inline ? "inline-grid" : "grid",
            ["--grid-template-col" as any]:
                typeof col === "string" ? col : null,
            ["--grid-col" as any]: typeof col === "number" ? col : null,
            ["--grid-column-gap" as any]: variableSpacer(
                columnGap ? columnGap : gap ? gap : null
            ),
            ["--grid-row-gap" as any]: variableSpacer(
                rowGap ? rowGap : gap ? gap : null
            ),
            ...style,
        }

        return (
            <Styles.StyledGrid
                ref={ref}
                as={as}
                style={styles}
                data-justify-items={justifyItems}
                data-justify-content={justifyContent}
                data-align-content={alignContent}
                data-align-items={alignItems}
                data-inline={inline?.toString()}
                {...rest}
            >
                {children}
            </Styles.StyledGrid>
        )
    }
)

export default Grid
