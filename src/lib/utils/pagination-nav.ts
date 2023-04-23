/*=============================================== Pagination navigation ===============================================*/

import { useSearchParams } from "react-router-dom"

export const usePaginationNav = (
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    queries?: string[][]
) => {
    // eslint-disable-next-line
    const [_, setSearchParams] = useSearchParams()

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)

        setSearchParams(
            queries
                ? {
                      page: (currentPage - 1).toString(),
                      ...Object.fromEntries(queries),
                  }
                : { page: (currentPage - 1).toString() }
        )

        window.scrollTo(0, 0)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)

        setSearchParams(
            queries
                ? {
                      page: (currentPage + 1).toString(),
                      ...Object.fromEntries(queries),
                  }
                : { page: (currentPage + 1).toString() }
        )

        window.scrollTo(0, 0)
    }

    return {
        handlePrev,
        handleNext,
    }
}
