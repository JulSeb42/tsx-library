/*=============================================== Pagination ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

import Variables from "../Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

/*==================== Component ====================*/

const Pagination = ({ justify = "left", children, ...props }: Props) => (
    <StyledPagination $justify={justify} {...props}>
        {children}
    </StyledPagination>
)

const PaginationButton = ({
    isActive,
    to,
    content,
    icon,
    disabled,
    ...props
}: ButtonProps) => (
    <Button
        as={content === "more" ? "span" : to ? Link : "button"}
        $isActive={isActive}
        $more={content === "more"}
        to={to}
        disabled={disabled}
        {...props}
    >
        {content === "more" ? (
            "..."
        ) : (content === "prev" && icon) || (content === "next" && icon) ? (
            <Icon src={icon} size={16} />
        ) : content === "prev" ? (
            <ChevronLeftIcon size={20} />
        ) : content === "next" ? (
            <ChevronRightIcon size={20} />
        ) : (
            content
        )}
    </Button>
)

export { Pagination, PaginationButton }

/*==================== Types ====================*/

const justify = {
    left: "left",
    center: "center",
    right: "right",
} as const

type JustifyTypes = keyof typeof justify

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    justify?: JustifyTypes
}

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean
}

interface Possible1 extends BaseButtonProps {
    isActive?: boolean
    to?: string
    content: number
    icon?: never
}

interface Possible2 extends BaseButtonProps {
    isActive?: never
    to?: never
    content: "more"
    icon?: never
}

interface Possible3 extends BaseButtonProps {
    isActive?: never
    to?: never
    content: "prev"
    icon?: string
}

interface Possible4 extends BaseButtonProps {
    isActive?: never
    to?: never
    content: "next"
    icon?: string
}

type ButtonProps = Possible1 | Possible2 | Possible3 | Possible4

/*==================== Styles ====================*/

const StyledPagination = styled.div<{ $justify?: JustifyTypes }>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent:
                $justify === "center"
                    ? "center"
                    : $justify === "right"
                    ? "flex-end"
                    : "flex-start",
            $gap: "xs",
        })};
`

const Button = styled.button<{ $isActive?: boolean; $more?: boolean }>`
    --button-size: 32px;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: ${Variables.Radiuses.Circle};
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.White : Variables.Colors.Primary500};
    background-color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.Primary500 : "transparent"};
    text-decoration: none;

    ${({ $more, disabled }) =>
        !$more &&
        !disabled &&
        css`
            transition: ${Variables.Transitions.Short};

            @media ${Variables.Breakpoints.Hover} {
                &:hover {
                    background-color: ${Variables.Colors.Primary300};
                    color: ${Variables.Colors.White};
                }

                &:active {
                    background-color: ${Variables.Colors.Primary600};
                }
            }
        `}

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }

    @media ${Variables.Breakpoints.Mobile} {
        --button-size: 24px;
    }
`
