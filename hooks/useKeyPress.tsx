/*=============================================== useKeyPress ===============================================*/

import { useEffect } from "react"

const useKeyPress = (
    callback: () => void,
    keyCodes: string | string[]
): void => {
    useEffect(() => {
        const handler = ({ code }: KeyboardEvent) => {
            if (keyCodes.includes(code)) {
                callback()
            }
        }

        window.addEventListener("keydown", handler)

        return () => window.removeEventListener("keydown", handler)
    }, [callback, keyCodes])
}

export default useKeyPress
