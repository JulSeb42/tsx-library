/*=============================================== Pagination component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import { useSearchParams } from "react-router-dom"
import classNames from "classnames"

import { Icon } from "../../"
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons"
import { usePaginationNav } from "../../utils"

import { StyledPagination, Button } from "./styles"
import type {
    PaginationContainerProps,
    PaginationProps,
    PaginationButtonProps,
} from "./types"

export const PaginationButton = forwardRef(
    (
        {
            as,
            isActive,
            buttonContent,
            icon,
            iconSize = 16,
            disabled,
            className,
            ...rest
        }: PaginationButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <Button
                as={as}
                ref={ref}
                disabled={disabled}
                className={classNames(
                    { more: buttonContent === "more" },
                    { active: isActive }
                )}
                type="button"
                {...rest}
            >
                {buttonContent === "more" ? (
                    "..."
                ) : (buttonContent === "prev" && icon) ||
                  (buttonContent === "next" && icon) ? (
                    typeof icon === "string" ? (
                        <Icon
                            src={icon}
                            size={iconSize}
                            className={`icon-button icon-button-${buttonContent}`}
                        />
                    ) : (
                        icon
                    )
                ) : buttonContent === "prev" ? (
                    <ChevronLeftIcon
                        size={20}
                        className="icon-button icon-button-prev"
                    />
                ) : buttonContent === "next" ? (
                    <ChevronRightIcon
                        size={20}
                        className="icon-button icon-button-next"
                    />
                ) : (
                    buttonContent
                )}
            </Button>
        )
    }
)

export const PaginationContainer = forwardRef(
    (
        { as, children, ...rest }: PaginationContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledPagination ref={ref} as={as} {...rest}>
                {children}
            </StyledPagination>
        )
    }
)

export const Pagination = forwardRef(
    (
        {
            as,
            totalPages,
            pageLimit = 5,
            icons,
            queries,
            ...rest
        }: PaginationProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [searchParams, setSearchParams] = useSearchParams()

        const getPage = searchParams.get("page")

        const [currentPage, setCurrentPage] = useState(
            getPage ? parseInt(getPage) : 1
        )

        const { handlePrev, handleNext } = usePaginationNav(
            currentPage,
            setCurrentPage,
            queries
        )

        const goToPage = (i: number) => {
            setCurrentPage(i)

            setSearchParams(
                queries
                    ? { page: i.toString(), ...Object.fromEntries(queries) }
                    : { page: i.toString() }
            )

            window.scrollTo(0, 0)
        }

        const getPaginationGroup = () => {
            let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
            return (
                new Array(pageLimit)
                    // @ts-expect-error
                    .fill()
                    .map((_, i) => start + i + 1)
                    .filter(item => item <= totalPages)
            )
        }

        return (
            <PaginationContainer ref={ref} as={as} {...rest}>
                <PaginationButton
                    onClick={handlePrev}
                    buttonContent="prev"
                    disabled={currentPage === 1}
                    icon={icons?.prev}
                    iconSize={icons?.prevSize}
                    className="button button-prev"
                />

                {getPaginationGroup()[0] !== 1 && (
                    <>
                        <PaginationButton
                            buttonContent={1}
                            onClick={() => goToPage(1)}
                            className="button"
                        />
                        <PaginationButton
                            buttonContent="more"
                            className="button button-more"
                        />
                    </>
                )}

                {getPaginationGroup().map(item => (
                    <PaginationButton
                        buttonContent={item}
                        key={item}
                        onClick={() => goToPage(item)}
                        isActive={currentPage === item}
                        className="button"
                    />
                ))}

                {getPaginationGroup()[getPaginationGroup().length - 1] !==
                    totalPages && (
                    <>
                        <PaginationButton
                            buttonContent="more"
                            className="button button-more"
                        />

                        <PaginationButton
                            buttonContent={totalPages}
                            onClick={() => goToPage(totalPages)}
                            className="button"
                        />
                    </>
                )}

                <PaginationButton
                    onClick={handleNext}
                    buttonContent="next"
                    disabled={currentPage === totalPages}
                    icon={icons?.next}
                    iconSize={icons?.nextSize}
                    className="button button-next"
                />
            </PaginationContainer>
        )
    }
)
