/*=============================================== Pagination component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import {
    useNavigate,
    createSearchParams,
    useSearchParams,
} from "react-router-dom"

import { Icon } from "../../"
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons"
import { usePaginationNav } from "../../utils"

import * as Styles from "./styles"
import type {
    PaginationContainerProps,
    PaginationProps,
    PaginationButtonProps,
} from "./types"

export const PaginationButton = forwardRef(
    (
        {
            as,
            color = "primary",
            isActive,
            content,
            icon,
            disabled,
            buttonSize = 32,
            ...rest
        }: PaginationButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => (
        <Styles.Button
            as={as}
            ref={ref}
            $isActive={isActive}
            $more={content === "more"}
            disabled={disabled}
            $color={color}
            $buttonSize={buttonSize}
            {...rest}
        >
            {content === "more" ? (
                "..."
            ) : (content === "prev" && icon) || (content === "next" && icon) ? (
                typeof icon === "string" ? (
                    <Icon src={icon} size={16} />
                ) : (
                    icon
                )
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

export const PaginationContainer = forwardRef(
    (
        {
            as,
            justify = "center",
            children,
            gap = "xs",
            ...rest
        }: PaginationContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledPagination
                ref={ref}
                as={as}
                $justify={justify}
                $gap={gap}
                {...rest}
            >
                {children}
            </Styles.StyledPagination>
        )
    }
)

export const Pagination = forwardRef(
    (
        {
            as,
            justify,
            totalPages,
            pageLimit = 5,
            icons,
            color = "primary",
            queries,
            gap,
            buttonSize,
            ...rest
        }: PaginationProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const navigate = useNavigate()
        const [q] = useSearchParams()

        const getPage = q.get("page")

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

            queries
                ? navigate({
                      pathname: "",
                      search: createSearchParams({
                          page: i.toString(),
                          ...Object.fromEntries(queries),
                      }).toString(),
                  })
                : navigate({
                      pathname: "",
                      search: createSearchParams({
                          page: i.toString(),
                      }).toString(),
                  })
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
            <PaginationContainer
                ref={ref}
                as={as}
                justify={justify}
                gap={gap}
                {...rest}
            >
                <PaginationButton
                    onClick={handlePrev}
                    content="prev"
                    disabled={currentPage === 1}
                    color={color}
                    icon={icons?.prev}
                    buttonSize={buttonSize}
                />

                {getPaginationGroup()[0] !== 1 && (
                    <>
                        <PaginationButton
                            content={1}
                            onClick={() => goToPage(1)}
                            color={color}
                            buttonSize={buttonSize}
                        />
                        <PaginationButton
                            content="more"
                            color={color}
                            buttonSize={buttonSize}
                        />
                    </>
                )}

                {getPaginationGroup().map(item => (
                    <PaginationButton
                        content={item}
                        key={item}
                        color={color}
                        onClick={() => goToPage(item)}
                        isActive={currentPage === item}
                        buttonSize={buttonSize}
                    />
                ))}

                {getPaginationGroup()[getPaginationGroup().length - 1] !==
                    totalPages && (
                    <>
                        <PaginationButton
                            content="more"
                            color={color}
                            buttonSize={buttonSize}
                        />

                        <PaginationButton
                            content={totalPages}
                            onClick={() => goToPage(totalPages)}
                            color={color}
                            buttonSize={buttonSize}
                        />
                    </>
                )}

                <PaginationButton
                    onClick={handleNext}
                    content="next"
                    disabled={currentPage === totalPages}
                    color={color}
                    icon={icons?.next}
                    buttonSize={buttonSize}
                />
            </PaginationContainer>
        )
    }
)
