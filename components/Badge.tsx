/*=============================================== Badge ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { stringifyPx } from "../utils"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"

import { LibColorsTypes, ColorsShortTypes, SpacerTypes } from "./common-types"

/*==================== Component ====================*/

const Badge = ({ content, options, ...props }: Props) => {
    const defaultSize = 16

    return (
        <StyledBadge
            $color={options?.color || "primary"}
            $size={options?.size || defaultSize}
            $children={!!content}
            $childrenLength={typeof content === "number" ? content.toString().length : undefined}
            $padding={options?.padding}
            $textColor={options?.textColor}
            {...props}
        >
            {typeof content === "number" ? (
                content
            ) : typeof content === "string" ? (
                <Icon src={content} size={options?.size ? options?.size * 0.6 : defaultSize * 0.6} />
            ) : (
                ""
            )}
        </StyledBadge>
    )
}

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
    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
        size?: number
    }
}

interface Possible1 extends BaseProps {
    content?: number

    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
        size?: number

        padding?: SpacerTypes | number | string
    }
}

interface Possible2 extends BaseProps {
    content?: string

    options?: {
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
        size?: number

        padding?: never
    }
}

type Props = Possible1 | Possible2

/*==================== Styles ====================*/

const StyledBadge = styled.span<StyleProps>`
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
