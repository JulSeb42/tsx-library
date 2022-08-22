/*=============================================== Tag ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"

import { ColorsShortTypes, LibColorsTypes } from "../common-types"

/*==================== Component ====================*/

const Tag = ({ options, children, ...props }: Props) => (
    <StyledTag
        $tagStyle={options?.variant || "rounded"}
        $color={options?.color || "primary"}
        $textColor={options?.textColor}
        {...props}
    >
        {children}
    </StyledTag>
)

export default Tag

/*==================== Types ====================*/

const tagStyles = {
    pill: "pill",
    rounded: "rounded",
} as const

type TagStylesTypes = keyof typeof tagStyles

interface StyleProps extends React.HTMLAttributes<HTMLSpanElement> {
    $tagStyle?: TagStylesTypes
    $color?: ColorsShortTypes | LibColorsTypes | string
    $textColor?: ColorsShortTypes | LibColorsTypes | string
}

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    children: string
    options?: {
        variant?: TagStylesTypes
        color?: ColorsShortTypes | LibColorsTypes | string
        textColor?: ColorsShortTypes | LibColorsTypes | string
    }
}

/*==================== Styles ====================*/

const StyledTag = styled.span<StyleProps>`
    font-size: ${Variables.FontSizes.Small};
    padding: ${({ $tagStyle }) =>
        $tagStyle === "pill"
            ? `${Variables.Spacers.XXS} ${Variables.Spacers.M}`
            : `${Variables.Spacers.XXS} ${Variables.Spacers.S}`};
    border-radius: ${({ $tagStyle }) => ($tagStyle === "pill" ? Variables.Radiuses.Round : Variables.Radiuses.S)};
    background-color: ${Mixins.AllColors};
    color: ${({ $color, $textColor }) =>
        $color === "white"
            ? Variables.Colors.Primary500
            : $textColor
            ? Mixins.AllColors({ $color: $textColor })
            : Variables.Colors.White};
`
