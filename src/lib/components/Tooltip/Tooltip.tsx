/*=============================================== Tooltip component ===============================================*/

import React, { forwardRef, useRef, useState, useLayoutEffect } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { stringifyPx } from "../../"

import { StyledTooltip, Tip } from "./styles"
import type { TooltipProps } from "./types"

const Tooltip = forwardRef(
    (
        { as, children, tooltip, ...rest }: TooltipProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)

        const tooltipRef = useRef<any>(null)
        const [width, setWidth] = useState<number>(0)

        useLayoutEffect(() => setWidth(tooltipRef?.current?.offsetWidth), [])

        return (
            <StyledTooltip
                ref={ref}
                as={as}
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                {...rest}
            >
                <Tip
                    ref={tooltipRef}
                    className={classNames(
                        { visible: isVisible },
                        "tooltip-tip"
                    )}
                    style={{
                        ["--tip-width" as any]: stringifyPx(width),
                    }}
                >
                    {tooltip}
                </Tip>

                {children}
            </StyledTooltip>
        )
    }
)

export default Tooltip
