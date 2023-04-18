/*=============================================== Sticky component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableSpacer } from "../../"

import { StyledSticky } from "./styles"
import type { StickyProps } from "./types"

const Sticky = forwardRef(
    (
        { as, top = "s", children, style, ...rest }: StickyProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledSticky
            ref={ref}
            as={as}
            style={{
                ["--sticky-top" as any]: variableSpacer(top),
                ...style,
            }}
            {...rest}
        >
            {children}
        </StyledSticky>
    )
)

export default Sticky
