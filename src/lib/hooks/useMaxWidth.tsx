/*=============================================== useMaxWidth ===============================================*/

import { useState, useLayoutEffect } from "react"

export const useMaxWidth = (width: number) => {
    const [isMax, setIsMax] = useState<undefined | boolean>(undefined)

    useLayoutEffect(() => {
        const detectSize = () => {
            if (window.innerWidth <= width) {
                setIsMax(true)
            } else {
                setIsMax(false)
            }
        }

        detectSize()

        window.addEventListener("resize", () => detectSize())
    }, [width])

    return isMax
}
