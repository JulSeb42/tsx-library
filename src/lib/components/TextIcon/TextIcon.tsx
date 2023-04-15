/*=============================================== TextIcon component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon, Text } from "../../"
import { getIconSize } from "./get-icon-size"

import * as Styles from "./styles"
import type { TextIconProps } from "./types"

const TextIcon = forwardRef(
    (
        {
            as,
            textAs,
            children,
            tag = "p",
            display,
            icon,
            iconSize,
            iconColor,
            ...rest
        }: TextIconProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledTextIcon ref={ref} as={as}>
                <Styles.IconContainer $display={display} $tag={tag}>
                    <Icon
                        src={icon}
                        size={getIconSize(tag, display, iconSize)}
                        color={iconColor}
                    />
                </Styles.IconContainer>

                {tag === "h1" ||
                tag === "h2" ||
                tag === "h3" ||
                tag === "h4" ||
                tag === "h5" ? (
                    <Text tag={tag} display={display} as={textAs} {...rest}>
                        {children}
                    </Text>
                ) : (
                    <Text tag={tag} as={textAs} {...rest}>
                        {children}
                    </Text>
                )}
            </Styles.StyledTextIcon>
        )
    }
)

export default TextIcon
