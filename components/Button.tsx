/*=============================================== Button ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import Loader from "./Loader"

import { ColorsHoverTypes } from "./common-types"

/*==================== Component ====================*/

const Button = ({
    color = "primary",
    buttonStyle = "plain",
    noPadding,
    iconLeft,
    iconRight,
    disabled,
    isLoading,
    children,
    to,
    type = "button",
    ...props
}: Props) => (
    <Container
        $color={color}
        $buttonStyle={buttonStyle}
        $noPadding={noPadding}
        as={to ? Link : "button"}
        to={to ? to : undefined}
        disabled={isLoading || disabled}
        type={to ? undefined : type}
        {...props}
    >
        {isLoading && <Loader color="gray" size={16} borderSize={2} />}

        {iconLeft && !isLoading && <Icon src={iconLeft} size={16} />}

        {children}

        {iconRight && <Icon src={iconRight} size={16} />}
    </Container>
)

export default Button

/*==================== Types ====================*/

const buttonStyles = {
    plain: "plain",
    text: "text",
    outline: "outline",
} as const

export type ButtonStylesType = keyof typeof buttonStyles

interface StyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $color?: ColorsHoverTypes
    $buttonStyle?: ButtonStylesType
    $noPadding?: boolean
}

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    color?: ColorsHoverTypes
    buttonStyle?: ButtonStylesType
    noPadding?: boolean
    disabled?: boolean
    isLoading?: boolean
    children: string
    to?: string
    type?: "button" | "submit" | "reset" | undefined
    iconLeft?: string
    iconRight?: string
}

/*==================== Styles ====================*/

const Container = styled.button<StyleProps>`
    border: 1px solid ${({ $buttonStyle }) => ($buttonStyle === "outline" ? Mixins.ColorsHoverDefault : "transparent")};
    text-decoration: none;
    padding: ${({ $noPadding }) => ($noPadding ? 0 : `${Variables.Spacers.XS} ${Variables.Spacers.S}`)};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
        $gap: "xs",
    })};
    border-radius: ${Variables.Radiuses.M};
    background-color: ${({ $buttonStyle }) => ($buttonStyle === "plain" ? Mixins.ColorsHoverDefault : "transparent")};
    color: ${({ $buttonStyle, $color }) =>
        $buttonStyle === "plain" && $color !== "white"
            ? Variables.Colors.White
            : $buttonStyle === "plain" && $color === "white"
            ? Variables.Colors.Primary500
            : Mixins.ColorsHoverDefault};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverHover};
            color: ${({ $buttonStyle }) =>
                ($buttonStyle === "text" || $buttonStyle === "outline") && Mixins.ColorsHoverHover};
            border-color: ${({ $buttonStyle }) => $buttonStyle === "outline" && Mixins.ColorsHoverHover};
        }

        &:active {
            background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverActive};
            color: ${({ $buttonStyle }) =>
                ($buttonStyle === "text" || $buttonStyle === "outline") && Mixins.ColorsHoverActive};
            border-color: ${({ $buttonStyle }) => $buttonStyle === "outline" && Mixins.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $buttonStyle }) => ($buttonStyle === "plain" ? Variables.Colors.Gray100 : "")};
        color: ${Variables.Colors.Gray500};
        border-color: ${({ $buttonStyle }) => $buttonStyle === "outline" && Variables.Colors.Gray500};
    }
`
