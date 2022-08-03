/*=============================================== Pagination ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import ChevronLeftIcon from "../icons/ChevronLeftIcon"
import ChevronRightIcon from "../icons/ChevronRightIcon"

import { RequireAtLeastOne } from "./RequireAtLeastOne"

/*==================== Component ====================*/

const Pagination = ({ justify = "left", children, ...props }: Props) => (
    <Container $justify={justify} {...props}>
        {children}
    </Container>
)

const PaginationButton = ({
    number,
    more,
    prev,
    next,
    iconPrev,
    iconNext,
    active,
    disabled,
    ...props
}: ButtonProps) => (
    <Button as={more ? "span" : "button"} $active={active} $more={more} disabled={disabled} {...props}>
        {more ? (
            "..."
        ) : (prev && iconPrev) || (next && iconNext) ? (
            <Icon src={iconPrev ? iconPrev : iconNext ? iconNext : ""} size={16} />
        ) : prev ? (
            <ChevronLeftIcon size={20} />
        ) : next ? (
            <ChevronRightIcon size={20} />
        ) : (
            number
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

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $justify?: JustifyTypes
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    justify: JustifyTypes
}

interface buttonStyleProps extends React.HTMLAttributes<HTMLButtonElement> {
    $active?: boolean
    $more?: boolean
}

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    number?: number
    more?: boolean
    active?: boolean
    prev?: boolean
    next?: boolean
    disabled?: boolean
    iconPrev?: string
    iconNext?: string
}

type ButtonProps = RequireAtLeastOne<BaseButtonProps, "number" | "more" | "prev" | "next">

/*==================== Styles ====================*/

const Container = styled.div<StyleProps>`
    ${({ $justify }) =>
        Mixins.Flexbox({
            $alignItems: "center",
            $justifyContent: $justify === "center" ? "center" : $justify === "right" ? "flex-end" : "flex-start",
            $gap: "xs",
        })};
`

const Button = styled.button<buttonStyleProps>`
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
    color: ${({ $active }) => ($active ? Variables.Colors.White : Variables.Colors.Primary500)};
    background-color: ${({ $active }) => ($active ? Variables.Colors.Primary500 : "transparent")};

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
