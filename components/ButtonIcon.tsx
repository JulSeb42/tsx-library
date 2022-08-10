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
    icon,
    disabled,
    isLoading,
    to,
    options,
    ...props
}: Props) => (
    <StyledButtonIcon
        $buttonStyle={options?.variant || "plain"}
        $size={options?.size || 48}
        $color={options?.color || "primary"}
        to={to ? to : undefined}
        as={to ? Link : "button"}
        disabled={isLoading ? true : disabled}
        $hoverBackground={options?.hoverBackground}
        {...props}
    >
        {isLoading ? (
            <Loader
                options={{
                    size: options?.size ? options?.size * 0.6 : 48 * 0.6,
                    color: "gray",
                    borderSize: options?.loaderBorder || 4,
                }}
            />
        ) : (
            <Icon src={icon} size={options?.size ? options?.size * 0.6 : 48 * 0.6} />
        )}
    </StyledButtonIcon>
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

interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon: string
    isLoading?: boolean
    to?: string
    disabled?: boolean
}

interface Possible1 extends BaseProps {
    options?: {
        variant?: "plain"
        hoverBackground?: never

        color?: ColorsHoverTypes
        size?: number
        loaderBorder?: number
    }
}

interface Possible2 extends BaseProps {
    options?: {
        variant?: "transparent"
        hoverBackground?: boolean

        color?: ColorsHoverTypes
        size?: number
        loaderBorder?: number
    }
}

type Props = Possible1 | Possible2

/*==================== Styles ====================*/

const StyledButtonIcon = styled.button<StyleProps>`
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
