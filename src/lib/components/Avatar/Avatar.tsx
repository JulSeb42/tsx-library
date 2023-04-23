/*=============================================== Avatar component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { Image, Icon, stringifyPx } from "../../"

import { StyledAvatar } from "./styles"
import type { AvatarProps } from "./types"

const Avatar = forwardRef(
    (
        {
            as,
            size = 48,
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
        return (
            <StyledAvatar
                ref={ref}
                as={as}
                style={{
                    ["--avatar-size" as any]: stringifyPx(size),
                    ...style,
                }}
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
                        className="avatar-img"
                    />
                ) : icon ? (
                    <Icon
                        src={icon}
                        size={iconSize || size * 0.7}
                        className="avatar-icon"
                    />
                ) : (
                    letter
                )}
            </StyledAvatar>
        )
    }
)

export default Avatar
