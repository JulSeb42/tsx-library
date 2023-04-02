/*=============================================== Section component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { SectionProps } from "./types"

const Section = forwardRef(
    (
        { as, gap = "m", children, ...rest }: SectionProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledSection ref={ref} as={as} $gap={gap} {...rest}>
            {children}
        </Styles.StyledSection>
    )
)

export default Section