/*=============================================== Dl ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledDl } from "../styles"

const Dl = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    children,
    as,
    ...props
}: AllProps & React.HTMLAttributes<HTMLDListElement>) => (
    <StyledDl
        $textAlign={textAlign}
        $color={color}
        $linkColor={linkColor}
        $lineHeight={lineHeight}
        $fontSize={fontSize}
        $customFontSize={customFontSize}
        as={as}
        {...props}
    >
        {children}
    </StyledDl>
)

export default Dl
