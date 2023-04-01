/*=============================================== Dl component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { TextProps } from "../types"
import { StyledDl } from "../styles"

const Dl = forwardRef(
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
            fontWeightDt,
            fontWeightDd,
            maxLines,
            ...rest
        }: TextProps,
        ref?: ForwardedRef<HTMLDListElement>
    ) => (
        <StyledDl
            ref={ref}
            as={as}
            $color={color}
            $customFontSize={customFontSize}
            $textAlign={textAlign}
            $linkColor={linkColor}
            $lineHeight={lineHeight}
            $fontSize={fontSize}
            $fontWeightDt={fontWeightDt}
            $fontWeightDd={fontWeightDd}
            $maxLines={maxLines}
            {...rest}
        >
            {children}
        </StyledDl>
    )
)

export default Dl
