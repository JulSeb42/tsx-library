/*=============================================== useKeyPress ===============================================*/

import { useEffect, useCallback, useRef, useMemo } from "react"

const uniq_fast = (a: any) => {
    var seen: any = {}
    var out: any = []
    var len = a.length
    var j = 0
    for (var i = 0; i < len; i++) {
        var item = a[i]
        if (seen[item] !== 1) {
            seen[item] = 1
            out[j++] = item
        }
    }
    return out
}

export const overrideSystemHandling = (e: KeyboardEvent) => {
    if (e) {
        if (e.preventDefault) e.preventDefault()
        if (e.stopPropagation) {
            e.stopPropagation()
        } else if (window.event) {
            window.event.cancelBubble = true
        }
    }
}

const checkHeldKeysRecursive = (
    shortcutKey: KeyboardEvent,
    shortcutKeyRecursionIndex = 0,
    shortcutArray: KeyboardEvent[],
    heldKeysArray: KeyboardEvent[]
) => {
    const shortcutIndexOfKey = shortcutArray.indexOf(shortcutKey)
    const keyPartOfShortCut = shortcutArray.indexOf(shortcutKey) >= 0
    
    if (!keyPartOfShortCut) return false
    
    const comparisonIndex = Math.max(heldKeysArray.length - 1, 0)
    if (
        heldKeysArray.length &&
        heldKeysArray[comparisonIndex] !== shortcutArray[comparisonIndex]
    ) {
        return false
    }
    
    if (shortcutIndexOfKey === 0) {
        if (shortcutKeyRecursionIndex > 0)
            return heldKeysArray.indexOf(shortcutKey) >= 0
        return true
    }

    const previousShortcutKeyIndex = shortcutIndexOfKey - 1
    const previousShortcutKey = shortcutArray[previousShortcutKeyIndex]
    const previousShortcutKeyHeld =
        heldKeysArray[previousShortcutKeyIndex] === previousShortcutKey
    
    if (!previousShortcutKeyHeld) return false
    
    return checkHeldKeysRecursive(
        previousShortcutKey,
        shortcutIndexOfKey,
        shortcutArray,
        heldKeysArray
    )
}

// const BLACKLISTED_DOM_TARGETS = ["TEXTAREA", "INPUT"]

const DEFAULT_OPTIONS = {
    overrideSystem: false,
    ignoreInputFields: true,
    repeatOnHold: true,
}

const useKeyPress = (
    callback: (e: string[]) => void,
    shortcutKeys: string[],
    userOptions?: any
) => {
    const options = { ...DEFAULT_OPTIONS, ...userOptions }
    if (!Array.isArray(shortcutKeys))
        throw new Error(
            "The first parameter to `useKeyboardShortcut` must be an ordered array of `KeyboardEvent.key` strings."
        )

    if (!shortcutKeys.length)
        throw new Error(
            "The first parameter to `useKeyboardShortcut` must contain atleast one `KeyboardEvent.key` string."
        )

    if (!callback || typeof callback !== "function")
        throw new Error(
            "The second parameter to `useKeyboardShortcut` must be a function that will be envoked when the keys are pressed."
        )

    const shortcutKeysId = useMemo(() => shortcutKeys.join(), [shortcutKeys])

    // Normalizes the shortcut keys a deduplicated array of lowercased keys.
    const shortcutArray = useMemo(
        () => uniq_fast(shortcutKeys).map((key: string) => String(key).toLowerCase()),
        // eslint-disable-next-line
        [shortcutKeysId]
    )
    // useRef to avoid a constant re-render on keydown and keyup.
    const heldKeys = useRef<any>([])

    const keydownListener = useCallback(
        (keydownEvent: KeyboardEvent) => {
            const loweredKey = String(keydownEvent.key).toLowerCase()
            if (!(shortcutArray.indexOf(loweredKey) >= 0)) return

            // if (
            //     options.ignoreInputFields &&
            //     // @ts-expect-error
            //     BLACKLISTED_DOM_TARGETS.indexOf(keydownEvent.target.tagName) >=
            //         0
            // ) {
            //     return
            // }

            if (keydownEvent.repeat && !options.repeatOnHold) return

            if (options.overrideSystem) {
                overrideSystemHandling(keydownEvent)
            }
            
            const isHeldKeyCombinationValid = checkHeldKeysRecursive(
                // @ts-expect-error
                loweredKey,
                null,
                shortcutArray,
                heldKeys.current
            )

            if (!isHeldKeyCombinationValid) {
                return
            }

            const nextHeldKeys = [...heldKeys.current, loweredKey]
            if (nextHeldKeys.join() === shortcutArray.join()) {
                callback(shortcutKeys)
                return false
            }

            heldKeys.current = nextHeldKeys

            return false
        },
        // eslint-disable-next-line
        [
            shortcutKeysId,
            callback,
            options.overrideSystem,
            options.ignoreInputFields,
        ]
    )

    const keyupListener = useCallback(
        (keyupEvent: KeyboardEvent) => {
            const raisedKey = String(keyupEvent.key).toLowerCase()
            if (!(shortcutArray.indexOf(raisedKey) >= 0)) return

            const raisedKeyHeldIndex = heldKeys.current.indexOf(raisedKey)
            if (!(raisedKeyHeldIndex >= 0)) return

            let nextHeldKeys = []
            let loopIndex
            for (
                loopIndex = 0;
                loopIndex < heldKeys.current.length;
                ++loopIndex
            ) {
                if (loopIndex !== raisedKeyHeldIndex) {
                    // @ts-expect-error
                    nextHeldKeys.push(heldKeys.current[loopIndex])
                }
            }
            heldKeys.current = nextHeldKeys

            return false
        },
        // eslint-disable-next-line
        [shortcutKeysId]
    )

    const flushHeldKeys = useCallback(() => {
        heldKeys.current = []
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", keydownListener)
        window.addEventListener("keyup", keyupListener)
        return () => {
            window.removeEventListener("keydown", keydownListener)
            window.removeEventListener("keyup", keyupListener)
        }
        // eslint-disable-next-line
    }, [keydownListener, keyupListener, shortcutKeysId])

    // Resets the held keys array if the shortcut keys are changed.
    useEffect(() => {
        flushHeldKeys()
        // eslint-disable-next-line
    }, [shortcutKeysId, flushHeldKeys])

    return {
        flushHeldKeys,
    }
}

export default useKeyPress
