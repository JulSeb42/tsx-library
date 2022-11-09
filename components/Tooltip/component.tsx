/*=============================================== Tooltip ===============================================*/

import React, { useState, useRef, useLayoutEffect } from "react"

import * as Styles from "./styles"
import { TooltipProps } from "./types"

const Tooltip = ({
    tooltip,
    children,
    textStyle = "dotted",
    color = "primary",
    ...props
}: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false)

    const ref = useRef<any>(null)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth)
    }, [])

    return (
        <Styles.StyledTooltip
            $textStyle={textStyle}
            $color={color}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            {...props}
        >
            <Styles.Tip $isVisible={isVisible} ref={ref} $width={width}>
                {tooltip}
            </Styles.Tip>

            {children}
        </Styles.StyledTooltip>
    )
}

export default Tooltip
