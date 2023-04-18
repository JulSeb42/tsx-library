/*=============================================== Skeleton component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { variableBorderRadius, stringifyPx } from "../../"

import * as Styles from "./styles"
import type { SkeletonProps, ShineProps, SkeletonCardProps } from "./types"

export const SkeletonShine = forwardRef(
    ({ as, ...rest }: ShineProps, ref?: ForwardedRef<HTMLSpanElement>) => (
        <Styles.Shine ref={ref} as={as} {...rest} />
    )
)

export const Skeleton = forwardRef(
    (
        {
            as,
            width = "100%",
            height = 100,
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
            <Styles.StyledSkeleton
                ref={ref}
                as={as}
                style={{
                    ...variableBorderRadius(borderRadius, "skeleton"),
                    ["--skeleton-width" as any]: stringifyPx(width),
                    ["--skeleton-height" as any]: stringifyPx(height),
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
            </Styles.StyledSkeleton>
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
            ...rest
        }: SkeletonCardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.Card
                ref={ref}
                as={as}
                padding={padding}
                style={{
                    ...variableBorderRadius(borderRadius, "skeleton-card"),
                    ["--skeleton-card-width" as any]:
                        width && stringifyPx(width),
                    ["--skeleton-card-height" as any]:
                        height && stringifyPx(height),
                    ...style,
                }}
                $border={border}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {children}

                {isShiny && <SkeletonShine className="shine" />}
            </Styles.Card>
        )
    }
)
