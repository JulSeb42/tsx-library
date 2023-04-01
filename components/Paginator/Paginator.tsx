/*=============================================== Paginator component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import {
    useNavigate,
    createSearchParams,
    useSearchParams,
} from "react-router-dom"

import { Text, ButtonIcon } from "../../"
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons"
import usePaginationNav from "../../utils/pagination-nav"

import * as Styles from "./styles"
import type { PaginatorProps } from "./types"

const Paginator = forwardRef(
    (
        {
            as,
            justify = "left",
            accentColor = "primary",
            inputBackgroundColor,
            texts = {
                page: "Page",
                of: "of",
            },
            totalPages,
            icons,
            buttons = {
                variant: "transparent",
                hoverBackground: true,
            },
            isInputEditable = true,
            queries,
            handlePrevPage,
            handleNextPage,
            handleInput,
            page,
            ...rest
        }: PaginatorProps,
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

        const handlePage = (e: ChangeEvent<HTMLInputElement>) => {
            const page =
                parseInt(e.target.value) > totalPages
                    ? totalPages
                    : parseInt(e.target.value) < 0
                    ? 0
                    : !e.target.value
                    ? 1
                    : parseInt(e.target.value)
            setCurrentPage(page)

            queries
                ? navigate({
                      pathname: "",
                      search: createSearchParams({
                          page: page.toString(),
                          ...Object.fromEntries(queries),
                      }).toString(),
                  })
                : navigate({
                      pathname: "",
                      search: createSearchParams({
                          page: page.toString(),
                      }).toString(),
                  })
            window.scrollTo(0, 0)
        }

        const baseButtonProps = {
            size: 24,
            color: accentColor,
            showLabel: buttons?.showLabel,
        }

        const buttonPrev = {
            ...baseButtonProps,
            onClick: handlePrevPage || handlePrev,
            disabled: page ? page === 1 : currentPage === 1,
            label: buttons?.labelPrev || "Previous",
        }

        const buttonNext = {
            ...baseButtonProps,
            onClick: handleNextPage || handleNext,
            disabled: page ? page === totalPages : currentPage === totalPages,
            label: buttons?.labelNext || "Next",
        }

        const text = () => (
            <Text>{`${texts.page} ${currentPage} ${texts.of} ${totalPages}`}</Text>
        )

        return (
            <Styles.StyledPaginator
                ref={ref}
                as={as}
                $justify={justify}
                {...rest}
            >
                {isInputEditable ? (
                    <>
                        <span>{texts.page}</span>

                        <Styles.StyledInput
                            value={page || currentPage}
                            onChange={handleInput || handlePage}
                            type="number"
                            step={1}
                            min={1}
                            max={totalPages}
                            $accentColor={accentColor}
                            $background={inputBackgroundColor}
                        />

                        <span>{texts.of}</span>

                        <span>{totalPages}</span>
                    </>
                ) : (
                    text()
                )}

                {buttons?.variant === "transparent" ? (
                    <ButtonIcon
                        icon={
                            icons?.prev || <ChevronLeftIcon size={24 * 0.7} />
                        }
                        variant={buttons?.variant}
                        hoverBackground={buttons?.hoverBackground}
                        {...buttonPrev}
                    />
                ) : (
                    <ButtonIcon
                        icon={
                            icons?.prev || <ChevronLeftIcon size={24 * 0.7} />
                        }
                        variant={buttons?.variant}
                        {...buttonPrev}
                    />
                )}

                {buttons?.variant === "transparent" ? (
                    <ButtonIcon
                        icon={
                            icons?.next || <ChevronRightIcon size={24 * 0.7} />
                        }
                        variant={buttons?.variant}
                        hoverBackground={buttons?.hoverBackground}
                        {...buttonNext}
                    />
                ) : (
                    <ButtonIcon
                        icon={
                            icons?.next || <ChevronRightIcon size={24 * 0.7} />
                        }
                        variant={buttons?.variant}
                        {...buttonNext}
                    />
                )}
            </Styles.StyledPaginator>
        )
    }
)

export default Paginator
