/*=============================================== Blockquote component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledBlockquote } from "../styles"
import type { TextProps } from "../types"

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
