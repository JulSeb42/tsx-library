/*=============================================== Tag ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { TagProps } from "./types"

const Tag = ({
    children,
    variant = "rounded",
    color = "primary",
    textColor,
    as,
    ...props
}: TagProps) => (
    <Styles.StyledTag
        $variant={variant}
        $color={color}
        $textColor={textColor}
        as={as}
        {...props}
    >
        {children}
    </Styles.StyledTag>
)

export default Tag
