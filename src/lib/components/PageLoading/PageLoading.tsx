/*=============================================== PageLoading component ===============================================*/

import React, { forwardRef, useEffect } from "react"
import type { ForwardedRef } from "react"

import { Loader, disableScroll } from "../../"

import * as Styles from "./styles"
import type { PageLoadingProps } from "./types"

const PageLoading = forwardRef(
    (
        {
            as,
            backgroundColor = "primary",
            loaderColor,
            loaderVariant = 1,
            stopScrolling,
            loaderSize = 64,
            loaderBorder = 12,
            ...rest
        }: PageLoadingProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            if (stopScrolling) disableScroll()
        }, [stopScrolling])

        const loaderProps = {
            size: loaderSize,
            color: loaderColor
                ? loaderColor
                : backgroundColor === "white"
                ? "primary"
                : "background",
        }

        return (
            <Styles.StyledPageLoading
                ref={ref}
                as={as}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {loaderVariant === 4 ? (
                    <Loader variant={loaderVariant} {...loaderProps} />
                ) : (
                    <Loader
                        borderWidth={loaderBorder}
                        variant={loaderVariant}
                        {...loaderProps}
                    />
                )}
            </Styles.StyledPageLoading>
        )
    }
)

export default PageLoading
