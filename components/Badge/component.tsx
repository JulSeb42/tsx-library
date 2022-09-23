/*=============================================== Badge ===============================================*/

import React from "react"

import Icon from "../Icon"

import * as Styles from "./styles"
import { BadgeProps } from "./types"

const Badge = ({
    content,
    color = "primary",
    contentColor,
    size = 16,
    padding,
    as,
    ...props
}: BadgeProps) => (
    <Styles.StyledBadge
        $children={!!content}
        $childrenLength={
            typeof content === "number"
                ? content?.toString().length
                : content?.length
        }
        $color={color}
        $padding={padding}
        $size={size}
        $textColor={contentColor}
        as={as}
        {...props}
    >
        {typeof content === "number" ? (
            content
        ) : typeof content === "string" ? (
            <Icon src={content} size={size * 0.7} />
        ) : (
            ""
        )}
    </Styles.StyledBadge>
)

export default Badge
