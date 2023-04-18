/*=============================================== Fade component ===============================================*/

import React, { useState, useEffect, useRef } from "react"
import classNames from "classnames"

import { StyledFade } from "./styles"
import type { FadeProps } from "./types"

const Fade = ({ as, children, className, ...rest }: FadeProps) => {
    const [isVisible, setVisible] = useState(true)
    const ref = useRef<any>()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        })

        observer.observe(ref.current)
    }, [])

    return (
        <StyledFade
            ref={ref}
            as={as}
            className={classNames({ visible: isVisible }, className)}
            {...rest}
        >
            {children}
        </StyledFade>
    )
}

export default Fade
