/*=============================================== H1 ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledH1 } from "../styles"

const H1 = ({
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
    <StyledH1
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
    </StyledH1>
)

export default H1
