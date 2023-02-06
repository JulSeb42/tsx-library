/*=============================================== H1 component ===============================================*/

import React, { forwardRef } from "react"

import { TextProps } from "../types"
import { StyledH1 } from "../styles"

const H1 = forwardRef(
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
        <StyledH1
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
        </StyledH1>
    )
)

export default H1
