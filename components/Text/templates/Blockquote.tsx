/*=============================================== Blockquote ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledBlockquote } from "../styles"

const Blockquote = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLQuoteElement>) => (
    <StyledBlockquote
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledBlockquote>
)

export default Blockquote
