/*=============================================== P component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import type { TextProps } from "../types"
import { StyledP, MaxLinesMixin } from "../styles"

const P = forwardRef(
    (
        { as, children, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => {
        return (
            <PMaxLines ref={ref} as={as} $maxLines={maxLines} {...rest}>
                {children}
            </PMaxLines>
        )
    }
)

const PMaxLines = styled(StyledP)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default P
