/*=============================================== Skeleton component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { SkeletonProps, ShineProps, SkeletonCardProps } from "./types"

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
        ref?: ForwardedRef<HTMLSpanElement>
    ) => (
        <Styles.Shine
            ref={ref}
            as={as}
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
            flexGrow,
            flex,
            ...rest
        }: SkeletonProps,
        ref?: ForwardedRef<HTMLSpanElement>
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
            $flexGrow={flexGrow}
            $flex={flex}
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

export const SkeletonCard = forwardRef(
    (
        {
            as,
            border,
            borderRadius,
            width = "100%",
            height,
            backgroundColor = "background",
            inline,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            justifyItems,
            alignContent,
            gap,
            columnGap,
            rowGap,
            padding,
            children,
            ...rest
        }: SkeletonCardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.Card
                ref={ref}
                as={as}
                $inline={inline}
                $flexDirection={flexDirection}
                $flexWrap={flexWrap}
                $justifyContent={justifyContent}
                $alignItems={alignItems}
                $justifyItems={justifyItems}
                $alignContent={alignContent}
                $gap={gap}
                $columnGap={columnGap}
                $rowGap={rowGap}
                $padding={padding}
                $border={border}
                $borderRadius={borderRadius}
                $width={width}
                $height={height}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {children}
            </Styles.Card>
        )
    }
)
