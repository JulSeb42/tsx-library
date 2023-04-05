/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"

export const useFetch = <T,>(fetchFunction: any) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<any>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: T) => setResponse(res))
            .catch((err: any) => setError(err))

        setLoading(false)
        // eslint-disable-next-line
    }, [])

    return { response, error, loading } as const
}
