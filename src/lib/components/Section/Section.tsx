/*=============================================== Section component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { variableSpacer } from "../../"

import * as Styles from "./styles"
import type { SectionProps } from "./types"

const Section = forwardRef(
    (
        { as, gap = "m", children, style, ...rest }: SectionProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledSection
            ref={ref}
            as={as}
            style={{
                ["--section-gap" as any]: variableSpacer(gap),
                ...style,
            }}
            {...rest}
        >
            {children}
        </Styles.StyledSection>
    )
)

export default Section
