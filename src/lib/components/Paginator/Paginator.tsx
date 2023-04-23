/*=============================================== Paginator component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"

import { Text, ButtonIcon } from "../../"
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons"
import { usePaginationNav } from "../../utils"

import * as Styles from "./styles"
import type { PaginatorProps } from "./types"

const Paginator = forwardRef(
    (
        {
            as,
            texts = {
                page: "Page",
                of: "of",
            },
            totalPages,
            icons,
            buttons = {
                labelNext: "Next page",
                labelPrev: "Previous page",
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

            setSearchParams(
                queries
                    ? { page: page.toString(), ...Object.fromEntries(queries) }
                    : { page: page.toString() }
            )
            window.scrollTo(0, 0)
        }

        const baseButtonProps = {
            size: 24,
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
            <Text className="paginator-text">{`${texts.page} ${
                page || currentPage
            } ${texts.of} ${totalPages}`}</Text>
        )

        return (
            <Styles.StyledPaginator ref={ref} as={as} {...rest}>
                {isInputEditable ? (
                    <>
                        <span className="paginator-text">{texts.page}</span>

                        <Styles.StyledInput
                            value={page || currentPage}
                            onChange={handleInput || handlePage}
                            type="number"
                            step={1}
                            min={1}
                            max={totalPages}
                            className="paginator-input"
                        />

                        <span className="paginator-text">{texts.of}</span>

                        <span className="paginator-text">{totalPages}</span>
                    </>
                ) : (
                    text()
                )}

                <ButtonIcon
                    icon={icons?.prev || <ChevronLeftIcon size={24 * 0.7} />}
                    variant="transparent"
                    className="paginator-button paginator-button-prev"
                    {...buttonPrev}
                />

                <ButtonIcon
                    icon={icons?.next || <ChevronRightIcon size={24 * 0.7} />}
                    variant="transparent"
                    className="paginator-button paginator-button-next"
                    {...buttonNext}
                />
            </Styles.StyledPaginator>
        )
    }
)

export default Paginator
