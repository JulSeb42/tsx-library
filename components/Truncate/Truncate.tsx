/*=============================================== Truncate component ===============================================*/

import React, { useLayoutEffect, useRef, useState } from "react"

import * as Styles from "./styles"
import type { TruncateProps } from "./types"

const Truncate = ({ as, children, gap = "xs", ...rest }: TruncateProps) => {
    const containerRef = useRef<HTMLElement>(null)
    const [invisibleNumber, setInvisibleNumber] = useState<number>(0)

    useLayoutEffect(() => {
        const truncate = () => {
            if (!containerRef.current) return

            const childNodes = Array.from(
                containerRef.current.children
            ) as HTMLElement[]

            for (const node of childNodes) {
                node.hidden = true
            }

            if (childNodes.length === 0) return

            for (let i = 0; i < childNodes.length; i += 1) {
                const itemEl = childNodes[i]
                itemEl.hidden = false

                const itemRect = itemEl.getBoundingClientRect()
                const containerRect =
                    containerRef.current.getBoundingClientRect()

                if (
                    itemRect.bottom > containerRect.bottom ||
                    itemRect.right > containerRect.right
                ) {
                    itemEl.hidden = true

                    if (i > 0) {
                        childNodes[i - 1].hidden = true
                    }

                    if (i) break
                }
            }

            const getInvisibleNumber =
                containerRef.current.querySelectorAll("[hidden]").length - 1

            setInvisibleNumber(getInvisibleNumber)
        }

        truncate()

        const resizeObserver = new ResizeObserver((entries: any) => {
            window.requestAnimationFrame(() => {
                // eslint-disable-next-line
                for (const _ of entries) {
                    truncate()
                }
            })
        })

        const containerEl = containerRef.current

        if (containerEl) {
            resizeObserver.observe(containerEl)
        }

        return () => {
            if (containerEl) {
                resizeObserver.unobserve(containerEl)
            }
        }
    }, [children])

    return (
        <Styles.StyledTruncate ref={containerRef} as={as} $gap={gap} {...rest}>
            {children}

            {invisibleNumber > 0 && (
                <Styles.Number color="transparent" textColor="font">
                    {`+ ${invisibleNumber}`}
                </Styles.Number>
            )}
        </Styles.StyledTruncate>
    )
}

export default Truncate
