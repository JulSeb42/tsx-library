/*=============================================== Small component ===============================================*/

import React, { forwardRef } from "react"

import { TextProps } from "../types"
import { StyledSmall } from "../styles"

const Small = forwardRef(
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
        ref?: React.ForwardedRef<HTMLParagraphElement>
    ) => (
        <StyledSmall
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
        </StyledSmall>
    )
)

export default Small
