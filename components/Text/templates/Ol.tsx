/*=============================================== Ol component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledOl } from "../styles"
import type { TextProps } from "../types"

const Ol = forwardRef(
    (
        {
            children,
            textAlign,
            color,
            linkColor = "primary",
            lineHeight,
            fontSize,
            customFontSize,
            as,
            fontWeight,
            maxLines,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLOListElement>
    ) => (
        <StyledOl
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
        </StyledOl>
    )
)

export default Ol
