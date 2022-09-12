/*=============================================== ProgressCircle component ===============================================*/

import React, { useEffect, useState } from "react"

import Icon from "../Icon"
import Text from "../Text"

import * as Styles from "./styles"
import { ProgressCircleProps } from "./types"

const cleanPercentage = (value: number) => {
    const isNegativeOrNaN = !Number.isFinite(+value)
    const isTooHigh = value > 100
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +value
}

const Circle = ({ value, color, strokeWidth, speed }: ProgressCircleProps) => {
    const r = 70
    const circ = 2 * Math.PI * r
    const strokePct = ((100 - value) * circ) / 100

    return (
        <Styles.Circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circ}
            strokeDashoffset={value ? strokePct : 0}
            $color={color}
            $speed={speed}
        />
    )
}

const ProgressCircle = ({
    value,
    color = "primary",
    strokeColor = "gray-200",
    animated = true,
    size = 48,
    showValue,
    textColor = "gray",
    icon,
    iconColor = "primary",
    strokeWidth = 12,
    speed = 500,
}: ProgressCircleProps) => {
    const pct = cleanPercentage(value)

    const [animatedValue, setAnimatedValue] = useState(0)

    useEffect(() => {
        setAnimatedValue(pct)
    }, [pct])

    const progressFunc = () => (
        <Styles.StyledProgressCircle
            width={size}
            height={size}
            viewBox="0 0 200 200"
        >
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle
                    color={strokeColor}
                    value={100}
                    strokeWidth={strokeWidth}
                />
                <Circle
                    color={color}
                    value={animated ? animatedValue : pct}
                    strokeWidth={strokeWidth}
                    speed={speed}
                />
            </g>
        </Styles.StyledProgressCircle>
    )

    return showValue || icon ? (
        <Styles.ProgressCircleContainer>
            {progressFunc()}

            <Styles.Content $size={size}>
                {icon && (
                    <Icon src={icon} size={size * 0.4} color={iconColor} />
                )}

                {showValue && (
                    <Text customFontSize={size * 0.2} color={textColor}>
                        {value}%
                    </Text>
                )}
            </Styles.Content>
        </Styles.ProgressCircleContainer>
    ) : (
        progressFunc()
    )
}

export default ProgressCircle
