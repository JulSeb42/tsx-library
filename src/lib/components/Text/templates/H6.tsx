/*=============================================== H6 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import type { TextProps } from "../types"
import { StyledH6, MaxLinesMixin } from "../styles"

const H6 = forwardRef(
    (
        { as, children, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => {
        return (
            <H6MaxLines ref={ref} as={as} $maxLines={maxLines} {...rest}>
                {children}
            </H6MaxLines>
        )
    }
)

const H6MaxLines = styled(StyledH6)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default H6
