/*=============================================== Avatar component ===============================================*/

import React from "react"

import Icon from "../Icon"
import Image from "../Image"

import * as Styles from "./styles"
import { AvatarProps } from "./types"

const Avatar = ({
    img,
    alt,
    letter,
    icon,
    color = "primary",
    contentColor,
    size = 48,
    as,
    border,
    badge,
    borderRadius = "circle",
    ...props
}: AvatarProps) => {
    const avatarFunction = () => (
        <Styles.StyledAvatar
            $color={color}
            $size={size}
            $contentColor={contentColor}
            as={as}
            $border={typeof border === "object" ? true : border}
            $borderWidth={
                typeof border === "object" && border.width ? border.width : 2
            }
            $borderColor={
                typeof border === "object" && border.color
                    ? border.color
                    : "primary"
            }
            $borderRadius={borderRadius}
            {...props}
        >
            {img ? (
                <Image
                    src={img}
                    alt={alt || "Avatar"}
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

    return badge ? (
        <Styles.AvatarContainer $size={size}>
            {avatarFunction()}

            <Styles.Badge
                $background={
                    typeof badge === "object" ? badge.color : "primary"
                }
                $length={
                    typeof badge === "object" && badge.content
                        ? badge.toString().length
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
            >
                {typeof badge === "object" && badge.content
                    ? badge.content
                    : typeof badge === "number"
                    ? badge
                    : ""}
            </Styles.Badge>
        </Styles.AvatarContainer>
    ) : (
        avatarFunction()
    )
}

export default Avatar
