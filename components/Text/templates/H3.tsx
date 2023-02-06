/*=============================================== H3 component ===============================================*/

import React, { forwardRef } from "react"

import { TextProps } from "../types"
import { StyledH3 } from "../styles"

const H3 = forwardRef(
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
            display,
            fontWeight,
            maxLines,
            ...rest
        }: TextProps,
        ref?: React.ForwardedRef<HTMLHeadingElement>
    ) => (
        <StyledH3
            ref={ref}
            as={as}
            $color={color}
            $customFontSize={customFontSize}
            $display={display}
            $textAlign={textAlign}
            $linkColor={linkColor}
            $lineHeight={lineHeight}
            $fontSize={fontSize}
            $fontWeight={fontWeight}
            $maxLines={maxLines}
            {...rest}
        >
            {children}
        </StyledH3>
    )
)

export default H3
