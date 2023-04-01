/*=============================================== Ol component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { TextProps } from "../types"
import { StyledOl } from "../styles"

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
