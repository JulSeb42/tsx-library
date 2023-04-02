/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"

export const useFetch = <T,>(fetchFunction: any) => {
    const [response, setResponse] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<undefined | string>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: any) => {
                setResponse(res.data)
                setLoading(false)
            })
            .catch((err: any) => {
                setError(err)
            })
        // eslint-disable-next-line
    }, [])

    return { response, error, loading } as const
}
