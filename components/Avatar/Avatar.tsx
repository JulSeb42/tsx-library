/*=============================================== Avatar component ===============================================*/

import React, { forwardRef, useRef, useEffect, useState } from "react"

import { Image, Icon } from "../../"

import * as Styles from "./styles"
import { AvatarProps } from "./types"

const Avatar = forwardRef(
    (
        {
            as,
            size = 48,
            border,
            badge,
            borderRadius = "circle",
            img,
            alt = "Avatar",
            letter,
            icon,
            color = "primary",
            contentColor = "background",
            ...rest
        }: AvatarProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => {
        const avatarFn = () => (
            <Styles.StyledAvatar
                ref={ref}
                as={as}
                data-
                $size={size}
                $color={color}
                $contentColor={contentColor}
                $border={typeof border === "object" ? true : border}
                $borderWidth={
                    border && typeof border === "object" ? border.width : 2
                }
                $borderColor={
                    typeof border === "object" && border.color
                        ? border.color
                        : "primary"
                }
                $borderRadius={borderRadius}
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
                    <Icon src={icon} size={size * 0.7} />
                ) : (
                    letter
                )}
            </Styles.StyledAvatar>
        )

        const badgeRef = useRef<any>(null)
        const [badgeWidth, setBadgeWidth] = useState<any>(0)

        useEffect(() => {
            if (badge) {
                setBadgeWidth(badgeRef.current.offsetWidth)
            }
        }, [badge])

        return badge ? (
            <Styles.AvatarContainer $size={size}>
                {avatarFn()}

                <Styles.Badge
                    $background={
                        typeof badge === "object" ? badge.color : "primary"
                    }
                    $length={
                        typeof badge === "object" && badge.content
                            ? badge.content.toString().length
                            : typeof badge === "number"
                            ? badge.toString().length
                            : 0
                    }
                    $textColor={
                        typeof badge === "object" && badge.contentColor
                            ? badge.contentColor
                            : "background"
                    }
                    $position={
                        typeof badge === "object" && badge.position
                            ? badge.position
                            : "top"
                    }
                    ref={badgeRef}
                    $width={badgeWidth}
                >
                    {typeof badge === "object" && badge.content
                        ? badge.content
                        : typeof badge === "number"
                        ? badge
                        : ""}
                </Styles.Badge>
            </Styles.AvatarContainer>
        ) : (
            avatarFn()
        )
    }
)

export default Avatar
