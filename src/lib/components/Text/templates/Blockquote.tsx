/*=============================================== Blockquote component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledBlockquote } from "../styles"

const Blockquote = forwardRef(
    (
        {
            as,
            children,
            textAlign,
            color,
            linkStyles,
            lineHeight,
            fontSize,
            customFontSize,
            fontWeight,
            maxLines,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLQuoteElement>
    ) => (
        <StyledBlockquote
            ref={ref}
            as={as}
            $color={color}
            $customFontSize={customFontSize}
            $textAlign={textAlign}
            $linkStyles={linkStyles}
            $lineHeight={lineHeight}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $maxLines={maxLines}
            {...rest}
        >
            {children}
        </StyledBlockquote>
    )
)

export default Blockquote
