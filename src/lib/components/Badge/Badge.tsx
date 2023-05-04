/*=============================================== Badge component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon, stringifyPx } from "../../"

import { StyledBadge } from "./styles"
import type { BadgeProps } from "./types"

const Badge = forwardRef(
    (
        {
            as,
            color = "primary",
            size,
            icon,
            iconSize,
            number,
            style,
            ...rest
        }: BadgeProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const defaultSize = size || 16

        return (
            <StyledBadge
                ref={ref}
                as={as}
                style={{
                    ["--badge-size" as any]: size && stringifyPx(size),
                    ...style,
                }}
                $hasChildren={!!number}
                $childrenLength={number?.toString().length}
                $color={color}
                {...rest}
            >
                {icon ? (
                    typeof icon === "string" ? (
                        <Icon
                            src={icon}
                            size={iconSize || defaultSize * 0.7}
                            className="badge-icon"
                        />
                    ) : (
                        icon
                    )
                ) : (
                    number && number
                )}
            </StyledBadge>
        )
    }
)

export default Badge
