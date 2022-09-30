/*=============================================== useFetch ===============================================*/

import { useEffect, useState } from "react"

const useFetch = <T,>(fetchFunction: any) => {
    const [response, setResponse] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<undefined | string>(undefined)

    useEffect(() => {
        fetchFunction
            .then((res: any) => {
                setResponse(res.data)
                setIsLoading(false)
            })
            .catch((err: any) => {
                setError(err)
            })
        // eslint-disable-next-line
    }, [])

    return { response, error, isLoading } as const
}

export default useFetch