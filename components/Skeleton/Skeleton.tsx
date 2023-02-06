/*=============================================== Skeleton component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { SkeletonProps, ShineProps } from "./types"

export const Skeleton = forwardRef(
    (
        {
            as,
            width,
            height,
            aspectRatio,
            backgroundColor = "gray-100",
            borderRadius,
            animation = true,
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
        />
    )
)

export const SkeletonShine = forwardRef(
    (
        { as, speed = 2000, ...rest }: ShineProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => <Styles.Shine ref={ref} $speed={speed} {...rest} />
)
