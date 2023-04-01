/*=============================================== H2 component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { TextProps } from "../types"
import { StyledH2 } from "../styles"

const H2 = forwardRef(
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
        ref?: ForwardedRef<HTMLHeadingElement>
    ) => (
        <StyledH2
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
        </StyledH2>
    )
)

export default H2
