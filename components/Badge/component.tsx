/*=============================================== Badge ===============================================*/

import React from "react"

import Icon from "../Icon"

import * as Styles from "./styles"
import { BadgeProps } from "./types"

const Badge = ({ content, options, ...props }: BadgeProps) => {
    const defaultSize = 16

    return (
        <Styles.StyledBadge
            $color={options?.color || "primary"}
            $size={options?.size || defaultSize}
            $children={!!content}
            $childrenLength={
                typeof content === "number"
                    ? content.toString().length
                    : undefined
            }
            $padding={options?.padding}
            $textColor={options?.textColor}
            {...props}
        >
            {typeof content === "number" ? (
                content
            ) : typeof content === "string" ? (
                <Icon
                    src={content}
                    size={
                        options?.size ? options?.size * 0.6 : defaultSize * 0.6
                    }
                />
            ) : (
                ""
            )}
        </Styles.StyledBadge>
    )
}

export default Badge
