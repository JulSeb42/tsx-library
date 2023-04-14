/*=============================================== Ol component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledOl } from "../styles"

const Ol = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLOListElement>
    ) => {
        return (
            <StyledOl ref={ref} as={as} {...rest}>
                {children}
            </StyledOl>
        )
    }
)

export default Ol
