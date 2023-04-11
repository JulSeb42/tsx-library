/*=============================================== H1 component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import type { TextProps } from "../types"
import { StyledH1 } from "../styles"

const H1 = forwardRef(
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
            display,
            fontWeight,
            maxLines,
            codeStyles,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => (
        <StyledH1
            ref={ref}
            as={as}
            $color={color}
            $linkStyles={linkStyles}
            $fontSize={fontSize}
            $customFontSize={customFontSize}
            $textAlign={textAlign}
            $lineHeight={lineHeight}
            $display={display}
            $fontWeight={fontWeight}
            $maxLines={maxLines}
            $codeStyles={codeStyles}
            {...rest}
        >
            {children}
        </StyledH1>
    )
)

export default H1
