/*=============================================== Skeleton component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { variableBorderRadius, stringifyPx } from "../../"

import { StyledSkeleton, Shine, Card } from "./styles"
import type { SkeletonProps, ShineProps, SkeletonCardProps } from "./types"

export const SkeletonShine = forwardRef(
    ({ as, ...rest }: ShineProps, ref?: ForwardedRef<HTMLSpanElement>) => (
        <Shine ref={ref} as={as} {...rest} />
    )
)

export const Skeleton = forwardRef(
    (
        {
            as,
            width = "100%",
            height = 100,
            maxWidth,
            backgroundColor = "gray-100",
            borderRadius = "s",
            animation,
            flexGrow,
            flex,
            style,
            className,
            ...rest
        }: SkeletonProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        return (
            <StyledSkeleton
                ref={ref}
                as={as}
                style={{
                    ...variableBorderRadius(borderRadius, "skeleton"),
                    ["--skeleton-width" as any]: width && stringifyPx(width),
                    ["--skeleton-height" as any]: height && stringifyPx(height),
                    ["--skeleton-max-width" as any]:
                        maxWidth && stringifyPx(maxWidth),
                    ["--skeleton-flex" as any]: flex,
                    ["--skeleton-flex-grow" as any]: flexGrow,
                    ...style,
                }}
                className={classNames(
                    { pulse: animation === "pulse" },
                    className
                )}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {animation === "shine" && <SkeletonShine className="shine" />}
            </StyledSkeleton>
        )
    }
)

export const SkeletonCard = forwardRef(
    (
        {
            as,
            children,
            border,
            backgroundColor = "background",
            isShiny,
            borderRadius = null,
            padding = null,
            style,
            width,
            height,
            maxWidth,
            ...rest
        }: SkeletonCardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Card
                ref={ref}
                as={as}
                padding={padding}
                style={{
                    ...variableBorderRadius(borderRadius, "skeleton-card"),
                    ["--skeleton-card-width" as any]:
                        width && stringifyPx(width),
                    ["--skeleton-card-height" as any]:
                        height && stringifyPx(height),
                    ["--skeleton-card-max-width" as any]:
                        maxWidth && stringifyPx(maxWidth),
                    ...style,
                }}
                $border={border}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {children}

                {isShiny && <SkeletonShine className="shine" />}
            </Card>
        )
    }
)
