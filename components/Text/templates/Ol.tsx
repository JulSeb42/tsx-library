/*=============================================== Ol ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledOl } from "../styles"

const Ol = ({
    color,
    textAlign,
    linkColor,
    children,
    fontSize,
    lineHeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLOListElement>) => (
    <StyledOl
        $color={color}
        $textAlign={textAlign}
        $linkColor={linkColor}
        $fontSize={fontSize}
        $lineHeight={lineHeight}
        {...props}
    >
        {children}
    </StyledOl>
)

export default Ol
