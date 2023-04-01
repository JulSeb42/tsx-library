/*=============================================== Blockquote component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { TextProps } from "../types"
import { StyledBlockquote } from "../styles"

const Blockquote = forwardRef(
    (
        {
            as,
            children,
            textAlign,
            color,
            linkColor = "primary",
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
            $linkColor={linkColor}
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
