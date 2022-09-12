/*=============================================== H3 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH3 } from "../styles"

const H3 = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    display,
    children,
    as,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH3
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        $display={display}
        as={as}
        {...props}
    >
        {children}
    </StyledH3>
)
export default H3
