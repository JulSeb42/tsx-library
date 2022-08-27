/*=============================================== Blockquote ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledBlockquote } from "../styles"

const Blockquote = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLQuoteElement>) => (
    <StyledBlockquote
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledBlockquote>
)

export default Blockquote
