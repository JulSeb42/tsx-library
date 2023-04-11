/*=============================================== Strong component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledStrong } from "../styles"

const Strong = forwardRef(
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
        <StyledStrong
            ref={ref}
            as={as}
            $color={color}
            $linkStyles={linkStyles}
            $fontWeight={fontWeight}
            $maxLines={maxLines}
            {...rest}
        >
            {children}
        </StyledStrong>
    )
)

export default Strong
