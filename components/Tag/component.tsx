/*=============================================== Tag ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { TagProps } from "./types"

const Tag = ({ options, children, ...props }: TagProps) => (
    <Styles.StyledTag
        $tagStyle={options?.variant || "rounded"}
        $color={options?.color || "primary"}
        $textColor={options?.textColor}
        {...props}
    >
        {children}
    </Styles.StyledTag>
)

export default Tag
