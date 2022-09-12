/*=============================================== Fade component ===============================================*/

import React, { useState, useRef, useEffect } from "react"

import * as Styles from "./styles"
import { FadeProps } from "./types"

const Fade = ({ children, as, ...props }: FadeProps) => {
    const [isVisible, setVisible] = useState(true)
    const ref = useRef<any>()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting))
        })
        observer.observe(ref.current)
    }, [])

    return (
        <Styles.StyledFade ref={ref} $isVisible={isVisible} as={as} {...props}>
            {children}
        </Styles.StyledFade>
    )
}

export default Fade
