/*=============================================== Hr component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledHr } from "./styles"
import type { HrProps } from "./types"

const Hr = forwardRef(
    ({ as, ...rest }: HrProps, ref?: ForwardedRef<HTMLHRElement>) => (
        <StyledHr ref={ref} as={as} {...rest} />
    )
)

export default Hr
