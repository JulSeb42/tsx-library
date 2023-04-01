/*=============================================== Pagination navigation ===============================================*/

import { useNavigate, createSearchParams } from "react-router-dom"

export const usePaginationNav = (
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    queries?: string[][]
) => {
    const navigate = useNavigate()

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)

        queries
            ? navigate({
                  pathname: "",

                  search: createSearchParams({
                      page: (currentPage - 1).toString(),
                      ...Object.fromEntries(queries),
                  }).toString(),
              })
            : navigate({
                  pathname: "",
                  search: createSearchParams({
                      page: (currentPage - 1).toString(),
                  }).toString(),
              })

        window.scrollTo(0, 0)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)

        queries
            ? navigate({
                  pathname: "",
                  search: createSearchParams({
                      page: (currentPage + 1).toString(),
                      ...Object.fromEntries(queries),
                  }).toString(),
              })
            : navigate({
                  pathname: "",
                  search: createSearchParams({
                      page: (currentPage + 1).toString(),
                  }).toString(),
              })

        window.scrollTo(0, 0)
    }

    return {
        handlePrev,
        handleNext,
    }
}
