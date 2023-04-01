/*=============================================== Masonry component ===============================================*/

import React, { useEffect, useRef, useState } from "react"

import { uuid } from "../../"

import * as Styles from "./styles"
import { MasonryProps } from "./types"

const useEventListener = (
    eventNames: any,
    handler: any,
    element = globalThis
) => {
    const savedHandler = useRef()
    useEffect(() => (savedHandler.current = handler), [handler])

    useEffect(() => {
        if (!element.addEventListener) return
        // @ts-expect-error
        const listener = (event: any) => savedHandler.current(event)

        for (const e of eventNames) element.addEventListener(e, listener)

        return () => {
            for (const e of eventNames) element.removeEventListener(e, listener)
        }
    }, [element, eventNames])
}

const fillCols = (children: any, cols: any) =>
    children.forEach((child: any, i: any) => cols[i % cols.length].push(child))

const Masonry = ({
    as,
    col = 4,
    gap = "l",
    children,
    ...rest
}: MasonryProps) => {
    const ref = useRef<any>()
    const [numCols, setNumCols] = useState(col)
    const cols = [...Array(col)].map(() => [])
    fillCols(children, cols)

    const resizeHandler = () =>
        setNumCols(Math.ceil(window.innerWidth / (window.innerWidth / numCols)))

    useEffect(resizeHandler, [numCols])
    useEventListener(`resize`, resizeHandler)

    return (
        <Styles.StyledMasonry ref={ref} as={as} $gap={gap} {...rest}>
            {[...Array(numCols)].map((_, index) => (
                <Styles.Col $gap={gap} key={uuid()}>
                    {cols[index]}
                </Styles.Col>
            ))}
        </Styles.StyledMasonry>
    )
}

export default Masonry
