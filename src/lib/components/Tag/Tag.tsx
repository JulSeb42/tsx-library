/*=============================================== Tag component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Icon } from "../../"

import { StyledTag } from "./styles"
import type { TagProps } from "./types"

const Tag = forwardRef(
    (
        {
            as,
            children,
            color = "primary",
            icons,
            variant = "plain",
            className,
            ...rest
        }: TagProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const iconProps = {
            size: 16,
        }

        return (
            <StyledTag
                ref={ref}
                as={as}
                className={classNames({ "with-icon": !!icons }, className)}
                $color={color}
                $variant={variant}
                {...rest}
            >
                {icons?.left && typeof icons?.left === "string" ? (
                    <Icon
                        src={icons.left}
                        className="tag-icon icon-left"
                        {...iconProps}
                    />
                ) : (
                    icons?.left
                )}

                {children}

                {icons?.right && typeof icons?.right === "string" ? (
                    <Icon
                        src={icons.right}
                        className="tag-icon icon-right"
                        {...iconProps}
                    />
                ) : (
                    icons?.right
                )}
            </StyledTag>
        )
    }
)

export default Tag
