/*=============================================== Badge component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon, stringifyPx } from "../../"

import * as Styles from "./styles"
import type { BadgeProps } from "./types"

const Badge = forwardRef(
    (
        {
            as,
            color = "primary",
            size,
            icon,
            number,
            style,
            ...rest
        }: BadgeProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const styles = {
            ["--badge-size" as any]: size && stringifyPx(size),
            ...style,
        }

        return (
            <Styles.StyledBadge
                ref={ref}
                as={as}
                style={styles}
                $hasChildren={!!number}
                $childrenLength={number?.toString().length}
                $color={color}
                {...rest}
            >
                {icon ? (
                    typeof icon === "string" ? (
                        <Icon src={icon} size={size ? size * 0.7 : 16 * 0.7} />
                    ) : (
                        icon
                    )
                ) : (
                    number && number
                )}
            </Styles.StyledBadge>
        )
    }
)

export default Badge
