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
    disabled,
    children,
    to,
    type = "button",
    isLoading,
    options,
    ...props
}: Props) => (
    <StyledButton
        $color={options?.color || "primary"}
        $buttonStyle={options?.variant || "plain"}
        $noPadding={options?.noPadding}
        as={to ? Link : "button"}
        to={to ? to : undefined}
        disabled={!!isLoading || disabled}
        type={to ? undefined : type}
        {...props}
    >
        {isLoading && <Loader options={{ size: 16, borderSize: 2, color: "gray" }} />}

        {options?.iconLeft && !isLoading && <Icon src={options.iconLeft} size={16} />}

        {children}

        {options?.iconRight && <Icon src={options.iconRight} size={16} />}
    </StyledButton>
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

interface BaseProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
    children: string
    to?: string
    type?: "button" | "submit" | "reset" | undefined
    isLoading?: boolean
}

interface Possible1 extends BaseProps {
    options?: {
        variant?: "plain" | "outline"
        color?: ColorsHoverTypes
        noPadding?: never

        iconLeft?: string
        iconRight?: string
    }
}

interface Possible2 extends BaseProps {
    options?: {
        variant?: "text"
        color?: ColorsHoverTypes
        noPadding?: boolean

        iconLeft?: string
        iconRight?: string
    }
}

type Props = Possible1 | Possible2

/*==================== Styles ====================*/

const StyledButton = styled.button<StyleProps>`
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
