/*=============================================== Pagination component ===============================================*/

import React, { forwardRef, useState } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"

import { Icon } from "../../"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"
import usePaginationNav from "../../utils/pagination-nav"

import * as Styles from "./styles"
import { PaginationProps, PaginationButtonProps } from "./types"

const PaginationButton = ({
    color,
    isActive,
    content,
    icon,
    disabled,
    ...rest
}: PaginationButtonProps) => (
    <Styles.Button
        $isActive={isActive}
        $more={content === "more"}
        disabled={disabled}
        $color={color}
        {...rest}
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

const Pagination = forwardRef(
    (
        {
            as,
            justify = "center",
            totalPages,
            pageLimit = 5,
            icons,
            color = "primary",
            queries,
            ...rest
        }: PaginationProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        const navigate = useNavigate()

        const [currentPage, setCurrentPage] = useState(1)

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
            <Styles.StyledPagination
                ref={ref}
                as={as}
                $justify={justify}
                {...rest}
            >
                <PaginationButton
                    onClick={handlePrev}
                    content="prev"
                    disabled={currentPage === 1}
                    color={color}
                    icon={icons?.prev}
                />

                {getPaginationGroup()[0] !== 1 && (
                    <>
                        <PaginationButton
                            content={1}
                            onClick={() => goToPage(1)}
                            color={color}
                        />
                        <PaginationButton content="more" color={color} />
                    </>
                )}

                {getPaginationGroup().map(item => (
                    <PaginationButton
                        content={item}
                        key={item}
                        color={color}
                        onClick={() => goToPage(item)}
                        isActive={currentPage === item}
                    />
                ))}

                {getPaginationGroup()[getPaginationGroup().length - 1] !==
                    totalPages && (
                    <>
                        <PaginationButton content="more" color={color} />

                        <PaginationButton
                            content={totalPages}
                            onClick={() => goToPage(totalPages)}
                            color={color}
                        />
                    </>
                )}

                <PaginationButton
                    onClick={handleNext}
                    content="next"
                    disabled={currentPage === totalPages}
                    color={color}
                    icon={icons?.next}
                />
            </Styles.StyledPagination>
        )
    }
)

export default Pagination
