/*=============================================== Ol component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledOl } from "../styles"

const Ol = forwardRef(
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
        ref?: ForwardedRef<HTMLOListElement>
    ) => (
        <StyledOl
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
        </StyledOl>
    )
)

export default Ol
