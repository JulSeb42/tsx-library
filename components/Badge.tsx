/*=============================================== Badge ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"

import { LibColorsTypes, ColorsShortTypes, SpacerTypes } from "./common-types"

/*==================== Component ====================*/

const Badge = ({ color = "primary", size = 16, children, icon, padding, textColor, ...props }: Props) => (
    <Container
        $color={color}
        $size={size}
        $children={!!children}
        $childrenLength={children?.length}
        $padding={padding}
        $textColor={textColor}
        {...props}
    >
        {children && children}

        {icon && <Icon src={icon} size={size * 0.6} />}
    </Container>
)

export default Badge

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $color?: ColorsShortTypes | LibColorsTypes | string
    $textColor?: ColorsShortTypes | LibColorsTypes | string
    $size?: number
    $children?: boolean
    $childrenLength?: number
    $padding?: SpacerTypes | number | string
}

interface BaseProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: ColorsShortTypes | LibColorsTypes
    textColor?: ColorsShortTypes | LibColorsTypes | string
    size?: number
    padding?: SpacerTypes | number | string
}

interface NumberProps extends BaseProps {
    children?: string
    icon?: never
}

interface IconProps extends BaseProps {
    children?: never
    icon?: string
}

type Props = NumberProps | IconProps

/*==================== Styles ====================*/

const Container = styled.span<StyleProps>`
    min-width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    font-size: ${({ $size }) => ($size ? $size * 0.6 : 16 * 0.6)}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    background-color: ${Mixins.AllColors};
    border-radius: ${Variables.Radiuses.Round};
    color: ${({ $color, $textColor }) =>
        $color === "white"
            ? Variables.Colors.Primary500
            : $textColor
            ? Mixins.AllColors({ $color: $textColor })
            : Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Black};
    padding: ${({ $children, $childrenLength, $padding }) =>
        $children && $childrenLength && $childrenLength > 2 && $padding
            ? $padding === "xxl"
                ? `0 ${Variables.Spacers.XXL}`
                : $padding === "xl"
                ? `0 ${Variables.Spacers.XL}`
                : $padding === "l"
                ? `0 ${Variables.Spacers.L}`
                : $padding === "m"
                ? `0 ${Variables.Spacers.M}`
                : $padding === "s"
                ? `0 ${Variables.Spacers.S}`
                : $padding === "xs"
                ? `0 ${Variables.Spacers.XS}`
                : $padding === "xxs"
                ? `0 ${Variables.Spacers.XXS}`
                : $padding
                ? `0 ${stringifyPx($padding)}`
                : ""
            : $children && $childrenLength && $childrenLength > 2 && !$padding && `0 ${Variables.Spacers.XXS}`};
`
