/*=============================================== Blockquote component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import styled from "styled-components"

import type { TextProps } from "../types"
import { StyledBlockquote, MaxLinesMixin } from "../styles"

const Blockquote = forwardRef(
    (
        { as, children, maxLines, ...rest }: TextProps,
        ref?: ForwardedRef<HTMLQuoteElement>
    ) => {
        return (
            <BlockQuoteMaxLines
                ref={ref}
                as={as}
                $maxLines={maxLines}
                {...rest}
            >
                {children}
            </BlockQuoteMaxLines>
        )
    }
)

const BlockQuoteMaxLines = styled(StyledBlockquote)<{ $maxLines?: number }>`
    ${({ $maxLines }) => $maxLines && MaxLinesMixin({ $maxLines })}
`

export default Blockquote
