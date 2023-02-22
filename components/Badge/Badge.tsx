/*=============================================== Badge component ===============================================*/

import React, { forwardRef } from "react"

import { Icon } from "../../"

import * as Styles from "./styles"
import { BadgeProps } from "./types"

const Badge = forwardRef(
    (
        {
            as,
            color = "primary",
            contentColor,
            size = 16,
            children,
            padding,
            content,
            ...rest
        }: BadgeProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.StyledBadge
            ref={ref}
            as={as}
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
            {...rest}
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
)

export default Badge