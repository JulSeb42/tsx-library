/*=============================================== Masonry component ===============================================*/

import React, { useEffect, useRef, useState } from "react"

import { uuid, variableSpacer } from "../../"

import { StyledMasonry, Col } from "./styles"
import type { MasonryProps } from "./types"

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
    style,
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

    const gapVar = {
        ["--masonry-gap" as any]: variableSpacer(gap),
    }

    return (
        <StyledMasonry
            ref={ref}
            as={as}
            style={{
                ...gapVar,
                ...style,
            }}
            {...rest}
        >
            {[...Array(numCols)].map((_, index) => (
                <Col style={{ ...gapVar }} className="col" key={uuid()}>
                    {cols[index]}
                </Col>
            ))}
        </StyledMasonry>
    )
}

export default Masonry
