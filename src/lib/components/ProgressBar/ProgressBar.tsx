/*=============================================== ProgressBar component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { SrOnly, getPercentage } from "../../"

import * as Styles from "./styles"
import type { ProgressBarProps } from "./types"

const ProgressBar = forwardRef(
    (
        {
            as,
            value,
            animated = true,
            color = "primary",
            min = 0,
            max = 100,
            className,
            style,
            ...rest
        }: ProgressBarProps,
        ref?: ForwardedRef<HTMLMeterElement>
    ) => {
        return (
            <Styles.StyledProgressBar
                ref={ref}
                as={as}
                value={value}
                min={min}
                max={max}
                style={{
                    ["--progress-value" as any]: `${getPercentage(
                        value,
                        parseInt(max.toString())
                    )}%`,
                    ["--progress-speed" as any]: value,
                    ...style,
                }}
                className={classNames({ "is-animated": animated }, className)}
                $color={color}
                {...rest}
            >
                <SrOnly>{`${value} / ${max}`}</SrOnly>
            </Styles.StyledProgressBar>
        )
    }
)

export default ProgressBar
