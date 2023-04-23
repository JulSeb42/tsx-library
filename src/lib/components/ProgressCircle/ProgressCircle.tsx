/*=============================================== ProgressCircle component ===============================================*/

import React, { forwardRef, useEffect, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Icon, SrOnly } from "../../"

import {
    StyledProgressCircle,
    Content,
    StyledCircle,
    PROGRESS_CIRCLE_SIZE,
    Value,
    ProgressCircleContainer,
} from "./styles"
import type { ProgressCircleProps } from "./types"

const cleanPercentage = (value: number) => {
    const isNegativeOrNaN = !Number.isFinite(+value)
    const isTooHigh = value > 100
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +value
}

const Circle = ({ value, color, animated, className }: ProgressCircleProps) => {
    const r = 70
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - value) * circ) / 100

    return (
        <StyledCircle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            strokeWidth={12}
            strokeDasharray={circ}
            strokeDashoffset={value ? strokePct : 0}
            className={classNames({ animated: animated }, "circle", className)}
            $color={color}
        />
    )
}

const ProgressCircle = forwardRef(
    (
        {
            value,
            animated = true,
            showValue = true,
            icon,
            color = "primary",
            className,
            ...rest
        }: ProgressCircleProps,
        ref?: ForwardedRef<any>
    ) => {
        const pct = cleanPercentage(value)

        const [animatedValue, setAnimatedValue] = useState(0)

        useEffect(() => {
            setAnimatedValue(pct)
        }, [pct])

        const progressFn = () => (
            <StyledProgressCircle
                width={PROGRESS_CIRCLE_SIZE}
                height={PROGRESS_CIRCLE_SIZE}
                viewBox="0 0 200 200"
                ref={ref}
                {...rest}
            >
                <g transform={`rotate(-90 ${"100 100"})`}>
                    <Circle value={100} color="gray-200" />
                    <Circle
                        value={animated ? animatedValue : pct}
                        className={classNames({ animated: animated })}
                        animated={animated}
                        color={color}
                    />
                </g>
            </StyledProgressCircle>
        )

        return showValue || icon ? (
            <ProgressCircleContainer className={className}>
                {progressFn()}

                <Content className="value-container">
                    {icon && (
                        <Icon
                            src={icon}
                            size={PROGRESS_CIRCLE_SIZE * 0.4}
                            color="gray"
                            className="icon"
                        />
                    )}

                    {showValue ? (
                        <Value className="value">{value}%</Value>
                    ) : (
                        <SrOnly>{value}%</SrOnly>
                    )}
                </Content>
            </ProgressCircleContainer>
        ) : (
            progressFn()
        )
    }
)

export default ProgressCircle
