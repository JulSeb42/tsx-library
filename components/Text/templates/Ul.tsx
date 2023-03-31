/*=============================================== Ul component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { StyledUl } from "../styles"
import type { TextProps } from "../types"

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
        ref?: ForwardedRef<HTMLUListElement>
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
