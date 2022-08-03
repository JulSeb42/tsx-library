/*=============================================== Avatar ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import Image from "./Image"

import { RequireAtLeastOne } from "./RequireAtLeastOne"
import { ColorsShortTypes, LibColorsTypes } from "./common-types"

/*==================== Component ====================*/

const Avatar = ({ color = "primary", textColor, size = 48, src, alt = "Avatar", children, icon, ...props }: Props) => (
    <Container $color={color} $size={size} $textColor={textColor} {...props}>
        {src && <Image src={src} alt={alt} width="100%" height="100%" fit="cover" />}

        {icon && <Icon src={icon} size={size * 0.6} />}

        {children && children}
    </Container>
)

export default Avatar

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $color?: LibColorsTypes | ColorsShortTypes | string
    $textColor?: LibColorsTypes | ColorsShortTypes | string
    $size?: number
}

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: LibColorsTypes | ColorsShortTypes | string
    size?: number
    src?: string
    alt?: string
    children?: string
    icon?: string
    textColor?: LibColorsTypes | ColorsShortTypes | string
}

type Props = RequireAtLeastOne<BaseProps, "src" | "icon" | "children">

/*==================== Styles ====================*/

const Container = styled.span<StyleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    background-color: ${Mixins.AllColors};
    color: ${({ $color, $textColor }) =>
        $color === "white"
            ? Variables.Colors.Primary500
            : $textColor
            ? Mixins.AllColors({ $color: $textColor })
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
