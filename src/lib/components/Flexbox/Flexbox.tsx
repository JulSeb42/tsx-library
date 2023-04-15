/*=============================================== Flexbox component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableAllPaddings, variableSpacer } from "../../"

import * as Styles from "./styles"
import type { FlexboxProps } from "./types"

const Flexbox = forwardRef(
    (
        {
            as,
            inline,
            flexDirection = null,
            flexWrap = null,
            justifyContent = null,
            alignItems = null,
            justifyItems = null,
            alignContent = null,
            gap = null,
            columnGap = null,
            rowGap = null,
            padding = null,
            children,
            style,
            ...rest
        }: FlexboxProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const styles = {
            ...variableAllPaddings(padding),
            ["--flex-display" as any]: inline ? "inline-flex" : "flex",
            ["--flex-direction" as any]: flexDirection,
            ["--flex-wrap" as any]: flexWrap,
            ["--flex-justify-content" as any]: justifyContent,
            ["--flex-align-items" as any]: alignItems,
            ["--flex-justify-items" as any]: justifyItems,
            ["--flex-align-content" as any]: alignContent,
            ["--flex-column-gap" as any]: variableSpacer(
                columnGap ? columnGap : gap ? gap : null
            ),
            ["--flex-row-gap" as any]: variableSpacer(
                rowGap ? rowGap : gap ? gap : null
            ),
            ...style,
        }

        return (
            <Styles.StyledFlexbox ref={ref} as={as} style={styles} {...rest}>
                {children}
            </Styles.StyledFlexbox>
        )
    }
)

export default Flexbox
