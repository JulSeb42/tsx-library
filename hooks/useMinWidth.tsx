/*=============================================== useMinWidth ===============================================*/

import { useState, useLayoutEffect } from "react"

const useMinWidth = (width: number) => {
    const [isMin, setIsMin] = useState<undefined | boolean>(undefined)

    useLayoutEffect(() => {
        const detectSize = () => {
            if (window.innerWidth >= width) {
                setIsMin(true)
            } else {
                setIsMin(false)
            }
        }

        detectSize()

        window.addEventListener("resize", () => detectSize())
    }, [width])

    return isMin
}

export default useMinWidth
