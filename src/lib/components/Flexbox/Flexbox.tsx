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
            ...variableAllPaddings(padding, "flex"),
            ["--flex-column-gap" as any]: variableSpacer(
                columnGap ? columnGap : gap ? gap : null
            ),
            ["--flex-row-gap" as any]: variableSpacer(
                rowGap ? rowGap : gap ? gap : null
            ),
            ...style,
        }

        return (
            <Styles.StyledFlexbox
                ref={ref}
                as={as}
                style={styles}
                data-inline={inline?.toString()}
                data-flex-direction={flexDirection}
                data-flex-wrap={flexWrap}
                data-flex-justify-content={justifyContent}
                data-flex-justify-items={justifyItems}
                data-flex-align-content={alignContent}
                data-flex-align-items={alignItems}
                {...rest}
            >
                {children}
            </Styles.StyledFlexbox>
        )
    }
)

export default Flexbox
