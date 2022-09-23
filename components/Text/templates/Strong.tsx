/*=============================================== Strong ===============================================*/

import React from "react"

import { AllProps } from "../types"

import { StyledStrong } from "../styles"

const Strong = ({
    color,
    linkColor = "primary",
    children,
    as,
    fontWeight,
    ...props
}: AllProps & React.HTMLAttributes<HTMLParagraphElement>) => (
    <StyledStrong
        $color={color}
        $linkColor={linkColor}
        as={as}
        $fontWeight={fontWeight}
        {...props}
    >
        {children}
    </StyledStrong>
)

export default Strong
