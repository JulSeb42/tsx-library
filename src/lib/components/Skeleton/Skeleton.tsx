/*=============================================== Skeleton component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

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
            ...rest
        }: SkeletonProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const styles = {
            ...style,
            ...variableBorderRadius(borderRadius),
            ["--width" as any]: stringifyPx(width),
            ["--height" as any]: stringifyPx(height),
            ["--flex" as any]: flex,
            ["--flex-grow" as any]: flexGrow,
        }

        return (
            <Styles.StyledSkeleton
                ref={ref}
                as={as}
                style={styles}
                $backgroundColor={backgroundColor}
                $animation={animation}
                {...rest}
            >
                {animation === "shine" && <SkeletonShine />}
            </Styles.StyledSkeleton>
        )
    }
)

export const SkeletonCard = forwardRef(
    (
        {
            as,
            border,
            backgroundColor = "background",
            children,
            isShiny,
            borderRadius = null,
            padding = null,
            style,
            ...rest
        }: SkeletonCardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const styles = {
            ...style,
            ...variableBorderRadius(borderRadius),
        }

        return (
            <Styles.Card
                ref={ref}
                as={as}
                padding={padding}
                style={styles}
                $border={border}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {children}

                {isShiny && <SkeletonShine />}
            </Styles.Card>
        )
    }
)
