/*=============================================== Avatar component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Image, Icon, variableBorderRadius, stringifyPx } from "../../"

import * as Styles from "./styles"
import type { AvatarProps } from "./types"

const Avatar = forwardRef(
    (
        {
            as,
            size = 48,
            borderRadius = "circle",
            img,
            alt = "Avatar",
            letter,
            icon,
            iconSize,
            color = "primary",
            contentColor,
            style,
            ...rest
        }: AvatarProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const styles = {
            ["--size" as any]: stringifyPx(size),
            ...variableBorderRadius(borderRadius),
            ...style,
        }

        return (
            <Styles.StyledAvatar
                ref={ref}
                as={as}
                style={styles}
                $color={color}
                $contentColor={contentColor}
                {...rest}
            >
                {img ? (
                    <Image
                        src={img}
                        alt={alt}
                        width="100%"
                        height="100%"
                        fit="cover"
                    />
                ) : icon ? (
                    <Icon src={icon} size={iconSize || size * 0.7} />
                ) : (
                    letter
                )}
            </Styles.StyledAvatar>
        )
    }
)

export default Avatar
