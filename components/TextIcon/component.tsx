/*=============================================== TextIcon ===============================================*/

import React from "react"

import Icon from "../Icon"
import Text from "../Text/component"

import * as Styles from "./styles"
import { TextIconProps } from "./types"

const TextIcon = ({
    icon,
    iconColor = "primary",
    children,
    color,
    tag = "p",
    lineHeight,
    display,
    gap = "xxs",
    fontWeight,
    ...props
}: TextIconProps) => {
    return (
        <Styles.StyledTextIcon $gap={gap}>
            <Styles.IconContainer
                $lineHeight={typeof lineHeight === "number" ? lineHeight : 1.5}
                $display={display}
                $tag={tag}
            >
                <Icon
                    src={icon}
                    color={iconColor}
                    size={
                        tag === "h1" && display
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
                    }
                />
            </Styles.IconContainer>
            
            <Text tag={tag} fontWeight={fontWeight} color={color} {...props}>
                {children}
            </Text>
        </Styles.StyledTextIcon>
    )
}

export default TextIcon
