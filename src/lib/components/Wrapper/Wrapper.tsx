/*=============================================== Wrapper component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledWrapper } from "./styles"
import type { WrapperProps } from "./types"

const Wrapper = forwardRef(
    (
        { as, template = "1col", children, style, ...rest }: WrapperProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledWrapper ref={ref} as={as} data-template={template} {...rest}>
            {children}
        </StyledWrapper>
    )
)

export default Wrapper
