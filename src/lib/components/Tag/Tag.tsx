/*=============================================== Tag component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon } from "../../"

import * as Styles from "./styles"
import type { TagProps } from "./types"

const Tag = forwardRef(
    (
        {
            as,
            children,
            color = "primary",
            icons,
            variant = "plain",
            ...rest
        }: TagProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const iconProps = {
            size: 16,
        }

        return (
            <Styles.StyledTag
                ref={ref}
                as={as}
                $color={color}
                $variant={variant}
                $hasIcon={!!icons}
                {...rest}
            >
                {icons?.left && typeof icons?.left === "string" ? (
                    <Icon src={icons.left} {...iconProps} />
                ) : (
                    icons?.left
                )}

                {children}

                {icons?.right && typeof icons?.right === "string" ? (
                    <Icon src={icons.right} {...iconProps} />
                ) : (
                    icons?.right
                )}
            </Styles.StyledTag>
        )
    }
)

export default Tag
