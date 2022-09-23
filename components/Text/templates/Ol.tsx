/*=============================================== Ol ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledOl } from "../styles"

const Ol = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLOListElement>) => (
    <StyledOl
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledOl>
)

export default Ol
