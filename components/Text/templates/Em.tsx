/*=============================================== Em ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledEm } from "../styles"

const Em = ({
    color,
    linkColor = "primary",
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledEm
        $color={color}
        $linkColor={linkColor}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledEm>
)

export default Em
