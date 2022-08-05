/*=============================================== ButtonIcon ===============================================*/

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

const ButtonIcon = ({
    buttonStyle = "plain",
    size = 48,
    color = "primary",
    disabled,
    isLoading,
    loaderBorder,
    to,
    icon,
    hoverBackground,
    ...props
}: Props) => (
    <Container
        $buttonStyle={buttonStyle}
        $size={size}
        $color={color}
        to={to ? to : undefined}
        as={to ? Link : "button"}
        disabled={isLoading ? true : disabled}
        $hoverBackground={hoverBackground}
        {...props}
    >
        {isLoading ? (
            <Loader size={size * 0.6} color="gray" borderSize={loaderBorder} />
        ) : icon ? (
            <Icon src={icon} size={size * 0.6} />
        ) : (
            ""
        )}
    </Container>
)

export default ButtonIcon

/*==================== Types ====================*/

const buttonStyles = {
    plain: "plain",
    transparent: "transparent",
} as const

type ButtonStylesProps = keyof typeof buttonStyles

interface StyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $buttonStyle?: ButtonStylesProps
    $color?: ColorsHoverTypes
    $size?: number
    $hoverBackground?: boolean
}

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    buttonStyle?: ButtonStylesProps
    color?: ColorsHoverTypes
    disabled?: boolean
    isLoading?: boolean
    to?: string
    size?: number
    icon: string
    loaderBorder?: number
    hoverBackground?: boolean
}

/*==================== Styles ====================*/

const Container = styled.button<StyleProps>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: ${Variables.Radiuses.Circle};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    padding: 0;
    border: none;
    background-color: ${({ $buttonStyle }) => ($buttonStyle === "plain" ? Mixins.ColorsHoverDefault : "transparent")};
    color: ${({ $buttonStyle, $color }) =>
        $buttonStyle === "plain" && $color === "white"
            ? Variables.Colors.Primary500
            : $buttonStyle === "plain" && $color !== "white"
            ? Variables.Colors.White
            : $buttonStyle === "transparent" && Mixins.ColorsHoverDefault};

    @media ${Variables.Breakpoints.Hover} {
        &:not(:disabled):hover {
            background-color: ${({ $buttonStyle, $hoverBackground }) =>
                $buttonStyle === "plain"
                    ? Mixins.ColorsHoverHover
                    : $buttonStyle === "transparent" && $hoverBackground
                    ? Variables.Colors.Gray50
                    : ""};
            color: ${({ $buttonStyle }) => $buttonStyle === "transparent" && Mixins.ColorsHoverHover};
        }

        &:not(:disabled):active {
            background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Mixins.ColorsHoverActive};
            color: ${({ $buttonStyle }) => $buttonStyle === "transparent" && Mixins.ColorsHoverActive};
        }
    }

    &:disabled {
        background-color: ${({ $buttonStyle }) => $buttonStyle === "plain" && Variables.Colors.Gray100};
        color: ${Variables.Colors.Gray500};
    }
`