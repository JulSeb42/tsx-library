/*=============================================== Ul ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledUl } from "../styles"

const Ul = ({
    textAlign,
    color,
    linkColor = "primary",
    lineHeight,
    fontSize,
    customFontSize,
    children,
    as,
    ...props
}: AllProps & React.HTMLAttributes<HTMLUListElement>) => (
    <StyledUl
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
    </StyledUl>
)

export default Ul
