/*=============================================== Tag component ===============================================*/

import React, { forwardRef } from "react"

import { Icon } from "../../"

import * as Styles from "./styles"
import { TagProps } from "./types"

const Tag = forwardRef(
    (
        {
            as,
            children,
            variant = "rounded",
            color = "primary",
            textColor,
            icons,
            ...rest
        }: TagProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => {
        const iconProps = {
            size: 16,
        }

        return (
            <Styles.StyledTag
                ref={ref}
                as={as}
                $variant={variant}
                $color={color}
                $textColor={textColor}
                $hasIcon={icons}
                {...rest}
            >
                {icons?.left && <Icon src={icons.left} {...iconProps} />}

                {children}

                {icons?.right && <Icon src={icons.right} {...iconProps} />}
            </Styles.StyledTag>
        )
    }
)

export default Tag
