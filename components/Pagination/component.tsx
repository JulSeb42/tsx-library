/*=============================================== Pagination ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import Icon from "../Icon"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"

import * as Styles from "./styles"
import { PaginationProps, ButtonProps } from "./types"

const Pagination = ({
    justify = "left",
    children,
    ...props
}: PaginationProps) => (
    <Styles.StyledPagination $justify={justify} {...props}>
        {children}
    </Styles.StyledPagination>
)

const PaginationButton = ({
    isActive,
    to,
    content,
    icon,
    disabled,
    ...props
}: ButtonProps) => (
    <Styles.Button
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
    </Styles.Button>
)

export { Pagination, PaginationButton }
