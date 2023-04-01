/*=============================================== TextIcon component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon, Text } from "../../"

import * as Styles from "./styles"
import { TextIconProps } from "./types"

const TextIcon = forwardRef(
    (
        {
            as,
            icon,
            iconSize,
            iconColor = "primary",
            tag = "p",
            display,
            gap = "xxs",
            lineHeight,
            children,
            color,
            fontWeight = "regular",
            textAs,
            ...rest
        }: TextIconProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const getSize = () =>
            iconSize
                ? iconSize
                : tag === "h1" && display
                ? 80
                : tag === "h2" && display
                ? 64
                : tag === "h3" && display
                ? 56
                : tag === "h4" && display
                ? 48
                : tag === "h5" && display
                ? 40
                : tag === "h1"
                ? 40
                : tag === "h2"
                ? 32
                : tag === "h3"
                ? 28.8
                : tag === "h4"
                ? 24
                : tag === "h5"
                ? 20.8
                : tag === "h6" || tag === "blockquote"
                ? 17.6
                : tag === "small"
                ? 14
                : 16

        return (
            <Styles.StyledTextIcon $gap={gap} ref={ref} as={as}>
                <Styles.IconContainer
                    $lineHeight={
                        typeof lineHeight === "number" ? lineHeight : 1.5
                    }
                    $display={display}
                    $tag={tag}
                >
                    <Icon src={icon} size={getSize()} color={iconColor} />
                </Styles.IconContainer>

                {tag === "h1" ||
                tag === "h2" ||
                tag === "h3" ||
                tag === "h4" ||
                tag === "h5" ? (
                    <Text
                        tag={tag}
                        lineHeight={lineHeight}
                        display={display}
                        fontWeight={fontWeight}
                        as={textAs}
                        color={color}
                        {...rest}
                    >
                        {children}
                    </Text>
                ) : (
                    <Text
                        tag={tag}
                        lineHeight={lineHeight}
                        fontWeight={fontWeight}
                        as={textAs}
                        color={color}
                        {...rest}
                    >
                        {children}
                    </Text>
                )}
            </Styles.StyledTextIcon>
        )
    }
)

export default TextIcon
