/*=============================================== Em component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledEm } from "../styles"

const Em = forwardRef(
    (
        {
            as,
            children,
            color,
            linkStyles,
            fontWeight,
            maxLines,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => (
        <StyledEm
            ref={ref}
            as={as}
            $color={color}
            $linkStyles={linkStyles}
            $fontWeight={fontWeight}
            $maxLines={maxLines}
            {...rest}
        >
            {children}
        </StyledEm>
    )
)

export default Em
