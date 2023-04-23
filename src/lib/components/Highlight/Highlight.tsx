/*=============================================== Highlight component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Text, getHighlightedText } from "../../"

import type { HighlightProps } from "./types"

const Highlight = forwardRef(
    (
        { as, highlightedText, children = "", ...rest }: HighlightProps,
        ref?: ForwardedRef<
            HTMLElement &
                HTMLParagraphElement &
                HTMLHeadingElement &
                HTMLQuoteElement &
                HTMLUListElement &
                HTMLOListElement
        >
    ) => {
        return (
            <Text ref={ref} as={as} {...rest}>
                {getHighlightedText(children, highlightedText)}
            </Text>
        )
    }
)

export default Highlight
