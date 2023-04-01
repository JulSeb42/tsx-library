/*=============================================== ProgressBar component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { SrOnly } from "../../"

import * as Styles from "./styles"
import { ProgressBarProps } from "./types"

const ProgressBar = forwardRef(
    (
        {
            as,
            value,
            animated = true,
            color = "primary",
            backgroundColor = "gray-200",
            width = "100%",
            height = "m",
            direction = "horizontal",
            min = 0,
            max = 100,
            speed,
            ...rest
        }: ProgressBarProps,
        ref?: ForwardedRef<HTMLMeterElement>
    ) => (
        <Styles.StyledProgressBar
            ref={ref}
            as={as}
            value={value}
            min={min}
            max={max}
            $color={color}
            $backgroundColor={backgroundColor}
            $animated={animated}
            $direction={direction}
            $width={width}
            $height={height}
            $speed={speed}
            {...rest}
        >
            <SrOnly>{`${value} / ${max}`}</SrOnly>
        </Styles.StyledProgressBar>
    )
)

export default ProgressBar
