/*=============================================== Avatar component ===============================================*/

import React from "react"

import Icon from "../Icon"
import Image from "../Image"

import * as Styles from "./styles"
import { AvatarProps } from "./types"

const Avatar = ({ options, content, ...props }: AvatarProps) => {
    const defaultSize = 48

    return (
        <Styles.StyledAvatar
            $color={options?.color || "primary"}
            $size={options?.size || defaultSize}
            $contentColor={options?.contentColor || "white"}
            {...props}
        >
            {content.img ? (
                <Image
                    src={content.img.src}
                    alt={content.img.alt || "Avatar"}
                    width="100%"
                    height="100%"
                    options={{ fit: "cover" }}
                />
            ) : content.icon && options?.size ? (
                <Icon
                    src={content.icon}
                    size={
                        options?.size ? options?.size * 0.6 : defaultSize * 0.6
                    }
                />
            ) : (
                content.letter
            )}
        </Styles.StyledAvatar>
    )
}

export default Avatar
