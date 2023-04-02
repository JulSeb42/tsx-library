/*=============================================== usePaginatedData ===============================================*/

import { useSearchParams } from "react-router-dom"

export const usePaginatedData = (data: any[], defaultLimit = 20) => {
    const [query] = useSearchParams()
    const page = query.get("page") || 1
    const currentPage: number =
        typeof page === "string" ? parseInt(page) : page || 1

    const getPaginatedData = (dataLimit = defaultLimit) => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return data?.slice(startIndex, endIndex)
    }

    const getNumberOfPages = (dataLimit = defaultLimit) =>
        Math.ceil((data?.length || 0) / dataLimit)

    return {
        getPaginatedData,
        getNumberOfPages,
    }
}
