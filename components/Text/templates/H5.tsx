/*=============================================== H5 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH5 } from "../styles"

const H5 = ({
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
    <StyledH5
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
    </StyledH5>
)

export default H5
