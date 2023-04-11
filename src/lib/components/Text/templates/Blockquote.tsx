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
            color,
            linkStyles,
            fontSize,
            customFontSize,
            textAlign,
            lineHeight,
            fontWeight,
            maxLines,
            codeStyles,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLQuoteElement>
    ) => (
        <StyledBlockquote
            ref={ref}
            as={as}
            $color={color}
            $linkStyles={linkStyles}
            $fontSize={fontSize}
            $customFontSize={customFontSize}
            $textAlign={textAlign}
            $lineHeight={lineHeight}
            $fontWeight={fontWeight}
            $maxLines={maxLines}
            $codeStyles={codeStyles}
            {...rest}
        >
            {children}
        </StyledBlockquote>
    )
)

export default Blockquote
