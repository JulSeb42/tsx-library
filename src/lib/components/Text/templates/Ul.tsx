/*=============================================== Ul component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledUl } from "../styles"

const Ul = forwardRef(
    (
        { as, children, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLUListElement>
    ) => {
        return (
            <StyledUl ref={ref} as={as} {...rest}>
                {children}
            </StyledUl>
        )
    }
)

export default Ul
