/*=============================================== Pagination component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import {
    useNavigate,
    createSearchParams,
    useSearchParams,
} from "react-router-dom"

import { Icon, useMaxWidth } from "../../"
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
            iconSize = 16,
            disabled,
            buttonSize,
            fontSize = "small",
            ...rest
        }: PaginationButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        const isMobile = useMaxWidth(600)

        return (
            <Styles.Button
                as={as}
                ref={ref}
                disabled={disabled}
                $isActive={isActive}
                $more={content === "more"}
                $color={color}
                $buttonSize={buttonSize ? buttonSize : isMobile ? 24 : 32}
                $fontSize={fontSize}
                {...rest}
            >
                {content === "more" ? (
                    "..."
                ) : (content === "prev" && icon) ||
                  (content === "next" && icon) ? (
                    typeof icon === "string" ? (
                        <Icon src={icon} size={iconSize} />
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
    }
)

export const PaginationContainer = forwardRef(
    (
        {
            as,
            justify = "center",
            children,
            gap,
            ...rest
        }: PaginationContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const isMobile = useMaxWidth(600)

        return (
            <Styles.StyledPagination
                ref={ref}
                as={as}
                $justify={justify}
                $gap={gap ? gap : isMobile ? "xxs" : "xs"}
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
            buttonFontSize,
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

        const buttonsProps = {
            color,
            buttonSize,
            fontSize: buttonFontSize,
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
                    icon={icons?.prev}
                    iconSize={icons?.prevSize}
                    {...buttonsProps}
                />

                {getPaginationGroup()[0] !== 1 && (
                    <>
                        <PaginationButton
                            content={1}
                            onClick={() => goToPage(1)}
                            {...buttonsProps}
                        />
                        <PaginationButton content="more" {...buttonsProps} />
                    </>
                )}

                {getPaginationGroup().map(item => (
                    <PaginationButton
                        content={item}
                        key={item}
                        onClick={() => goToPage(item)}
                        isActive={currentPage === item}
                        {...buttonsProps}
                    />
                ))}

                {getPaginationGroup()[getPaginationGroup().length - 1] !==
                    totalPages && (
                    <>
                        <PaginationButton content="more" {...buttonsProps} />

                        <PaginationButton
                            content={totalPages}
                            onClick={() => goToPage(totalPages)}
                            {...buttonsProps}
                        />
                    </>
                )}

                <PaginationButton
                    onClick={handleNext}
                    content="next"
                    disabled={currentPage === totalPages}
                    icon={icons?.next}
                    iconSize={icons?.nextSize}
                    {...buttonsProps}
                />
            </PaginationContainer>
        )
    }
)
