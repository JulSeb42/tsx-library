/*=============================================== Flexbox component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableAllPaddings, variableSpacer } from "../../"

import { StyledFlexbox } from "./styles"
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
        return (
            <StyledFlexbox
                ref={ref}
                as={as}
                style={{
                    ...variableAllPaddings(padding, "flex"),
                    ["--flex-column-gap" as any]: variableSpacer(
                        columnGap ? columnGap : gap ? gap : null
                    ),
                    ["--flex-row-gap" as any]: variableSpacer(
                        rowGap ? rowGap : gap ? gap : null
                    ),
                    ...style,
                }}
                data-inline={inline?.toString()}
                data-flex-direction={flexDirection}
                data-flex-wrap={flexWrap}
                data-justify-content={justifyContent}
                data-justify-items={justifyItems}
                data-align-content={alignContent}
                data-align-items={alignItems}
                {...rest}
            >
                {children}
            </StyledFlexbox>
        )
    }
)

export default Flexbox
