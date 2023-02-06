/*=============================================== Ul component ===============================================*/

import React, { forwardRef } from "react"

import { TextProps } from "../types"
import { StyledUl } from "../styles"

const Ul = forwardRef(
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
        ref?: React.ForwardedRef<HTMLUListElement>
    ) => (
        <StyledUl
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
        </StyledUl>
    )
)

export default Ul
