/*=============================================== Avatar ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import Image from "./Image"

import { ColorsShortTypes, LibColorsTypes } from "../common-types"

/*==================== Component ====================*/

const Avatar = ({
    options,
    content,
    ...props
}: Props) => {
    const defaultSize = 48

    return (
        <StyledAvatar
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
                <Icon src={content.icon} size={options?.size ? options?.size * 0.6 : defaultSize * 0.6} />
            ) : (
                content.letter
            )}
        </StyledAvatar>
    )
}

export default Avatar

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $color?: LibColorsTypes | ColorsShortTypes | string
    $contentColor?: LibColorsTypes | ColorsShortTypes | string
    $size?: number
}

type AvatarImg = {
    src: string
    alt?: string
}

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    options?: {
        size?: number
        color?: LibColorsTypes | ColorsShortTypes | string
        contentColor?: LibColorsTypes | ColorsShortTypes | string
    }
}

interface Possible1 extends BaseProps {
    content: {
        img: AvatarImg
        letter?: never
        icon?: never
    }
}

interface Possible2 extends BaseProps {
    content: {
        img?: never
        letter: string
        icon?: never
    }
}

interface Possible3 extends BaseProps {
    content: {
        img?: never
        letter?: never
        icon: string
    }
}

type Props = Possible1 | Possible2 | Possible3

/*==================== Styles ====================*/

const StyledAvatar = styled.span<StyleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    background-color: ${Mixins.AllColors};
    color: ${({ $color, $contentColor }) =>
        $color === "white" && !$contentColor
            ? Variables.Colors.Primary500
            : $contentColor
            ? Mixins.AllColors({ $color: $contentColor })
            : Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${({ $size }) => ($size ? $size * 0.6 : 48 * 0.6)}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    overflow: hidden;
`
