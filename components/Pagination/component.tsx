/*=============================================== Pagination ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"

import * as Styles from "./styles"
import { PaginationProps, ButtonProps } from "./types"

const Pagination = forwardRef(
    (
        { justify = "left", children, ...props }: PaginationProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledPagination $justify={justify} ref={ref} {...props}>
            {children}
        </Styles.StyledPagination>
    )
)

const PaginationButton = forwardRef(
    (
        {
            isActive,
            to,
            content,
            icon,
            disabled,
            color = "primary",
            ...props
        }: ButtonProps,
        ref?: React.ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.Button
            as={content === "more" ? "span" : to ? Link : "button"}
            $isActive={isActive}
            $more={content === "more"}
            to={to}
            disabled={disabled}
            ref={ref}
            $color={color}
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
        </Styles.Button>
    )
)

export { Pagination, PaginationButton }
