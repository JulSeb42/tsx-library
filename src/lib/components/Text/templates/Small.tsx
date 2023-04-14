/*=============================================== Small component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import type { TextProps } from "../types"
import { StyledSmall, MaxLinesMixin } from "../styles"

const Small = forwardRef(
    (
        { as, children, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <SmallMaxLines ref={ref} as={as} $maxLines={maxLines} {...rest}>
                {children}
            </SmallMaxLines>
        )
    }
)

const SmallMaxLines = styled(StyledSmall)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default Small
