/*=============================================== H2 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH2 } from "../styles"

const H2 = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    display,
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLHeadingElement>) => (
    <StyledH2
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        $display={display}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledH2>
)

export default H2
