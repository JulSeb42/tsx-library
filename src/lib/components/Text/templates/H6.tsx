/*=============================================== H6 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledH6 } from "../styles"

const H6 = forwardRef(
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
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => (
        <StyledH6
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
        </StyledH6>
    )
)

export default H6
