/*=============================================== TextIcon component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Icon, Text, stringifyPx } from "../../"

import * as Styles from "./styles"
import type { TextIconProps, PossibleTextIconTags } from "./types"

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
            className,
            style,
            ...rest
        }: TextIconProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledTextIcon
                ref={ref}
                as={as}
                className={className}
                style={style}
            >
                <Styles.IconContainer
                    style={{
                        ["--text-icon-container-size" as any]: stringifyPx(
                            getIconSize(tag, display) * 1.5
                        ),
                    }}
                >
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

const getIconSize = (
    tag: PossibleTextIconTags,
    display: boolean | undefined,
    iconSize?: number
) => {
    if (iconSize) return iconSize

    if (display) {
        switch (tag) {
            case "h1":
                return 80
            case "h2":
                return 64
            case "h3":
                return 56
            case "h4":
                return 48
            case "h5":
                return 40
        }
    }

    switch (tag) {
        case "h1":
            return 40
        case "h2":
            return 32
        case "h3":
            return 28.8
        case "h4":
            return 24
        case "h5":
            return 20.8
        case "h6":
        case "blockquote":
            return 17.6
        case "small":
            return 14
        case "p":
        default:
            return 16
    }
}

export default TextIcon
