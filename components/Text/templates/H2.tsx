/*=============================================== H2 component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledH2 } from "../styles"
import type { TextProps } from "../types"

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
