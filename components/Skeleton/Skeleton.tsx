/*=============================================== Skeleton component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { SkeletonProps, ShineProps } from "./types"

export const SkeletonShine = forwardRef(
    (
        {
            as,
            speed = 2000,
            color = "background",
            opacity = 0.7,
            width = 100,
            ...rest
        }: ShineProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.Shine
            ref={ref}
            $speed={speed}
            $color={color}
            $opacity={opacity}
            $width={width}
            {...rest}
        />
    )
)

export const Skeleton = forwardRef(
    (
        {
            as,
            width = "100%",
            height = 100,
            aspectRatio,
            backgroundColor = "gray-100",
            borderRadius,
            animation,
            shineColor,
            shineOpacity,
            shineSpeed,
            shineWidth,
            ...rest
        }: SkeletonProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.StyledSkeleton
            ref={ref}
            as={as}
            $width={width}
            $height={height}
            $aspectRatio={aspectRatio}
            $backgroundColor={backgroundColor}
            $borderRadius={borderRadius}
            $animation={animation}
            {...rest}
        >
            {animation === "shine" && (
                <SkeletonShine
                    opacity={shineOpacity}
                    color={shineColor}
                    speed={shineSpeed}
                    width={shineWidth}
                />
            )}
        </Styles.StyledSkeleton>
    )
)
