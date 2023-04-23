/*=============================================== Section component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableSpacer } from "../../"

import { StyledSection } from "./styles"
import type { SectionProps } from "./types"

const Section = forwardRef(
    (
        { as, gap = "m", children, style, ...rest }: SectionProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledSection
            ref={ref}
            as={as}
            style={{
                ["--section-gap" as any]: variableSpacer(gap),
                ...style,
            }}
            {...rest}
        >
            {children}
        </StyledSection>
    )
)

export default Section
