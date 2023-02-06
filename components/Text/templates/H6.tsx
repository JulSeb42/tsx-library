/*=============================================== H6 component ===============================================*/

import React, { forwardRef } from "react"

import { TextProps } from "../types"
import { StyledH6 } from "../styles"

const H6 = forwardRef(
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
        ref?: React.ForwardedRef<HTMLHeadingElement>
    ) => (
        <StyledH6
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
        </StyledH6>
    )
)

export default H6
