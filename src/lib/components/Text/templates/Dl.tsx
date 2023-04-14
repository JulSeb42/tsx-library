/*=============================================== Dl component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledDl } from "../styles"

const Dl = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLDListElement>
    ) => {
        return (
            <StyledDl ref={ref} as={as} {...rest}>
                {children}
            </StyledDl>
        )
    }
)

export default Dl
