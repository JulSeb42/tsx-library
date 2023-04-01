/*=============================================== Fade component ===============================================*/

import React, { useState, useEffect, useRef } from "react"

import * as Styles from "./styles"
import type { FadeProps } from "./types"

const Fade = ({ as, children, ...rest }: FadeProps) => {
    const [isVisible, setVisible] = useState(true)
    const ref = useRef<any>()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        })

        observer.observe(ref.current)
    }, [])

    return (
        <Styles.StyledFade ref={ref} as={as} $isVisible={isVisible} {...rest}>
            {children}
        </Styles.StyledFade>
    )
}

export default Fade
