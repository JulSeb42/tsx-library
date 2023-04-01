/*=============================================== Tooltip component ===============================================*/

import React, { forwardRef, useRef, useState, useLayoutEffect } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { TooltipProps } from "./types"

const Tooltip = forwardRef(
    (
        {
            as,
            textStyle = "dotted",
            color = "primary",
            children,
            tooltip,
            ...rest
        }: TooltipProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)

        const tooltipRef = useRef<any>(null)
        const [width, setWidth] = useState(0)

        useLayoutEffect(() => {
            setWidth(tooltipRef.current.offsetWidth)
        }, [])

        return (
            <Styles.StyledTooltip
                ref={ref}
                as={as}
                $textStyle={textStyle}
                $color={color}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                {...rest}
            >
                <Styles.Tip
                    $isVisible={isVisible}
                    ref={tooltipRef}
                    $width={width}
                >
                    {tooltip}
                </Styles.Tip>

                {children}
            </Styles.StyledTooltip>
        )
    }
)

export default Tooltip
