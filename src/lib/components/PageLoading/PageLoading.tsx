/*=============================================== PageLoading component ===============================================*/

import React, { forwardRef, useEffect } from "react"
import type { ForwardedRef } from "react"

import { Loader, disableScroll } from "../../"

import { StyledPageLoading } from "./styles"
import type { PageLoadingProps } from "./types"

const PageLoading = forwardRef(
    (
        {
            as,
            backgroundColor = "primary",
            loaderColor,
            loaderVariant = 1,
            stopScrolling,
            ...rest
        }: PageLoadingProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            if (stopScrolling) disableScroll()
        }, [stopScrolling])

        const loaderProps = {
            size: 64,
            color: loaderColor
                ? loaderColor
                : backgroundColor === "white"
                ? "primary"
                : "background",
            className: "loader",
        }

        return (
            <StyledPageLoading
                ref={ref}
                as={as}
                $backgroundColor={backgroundColor}
                {...rest}
            >
                {loaderVariant === 4 ? (
                    <Loader variant={loaderVariant} {...loaderProps} />
                ) : (
                    <Loader
                        borderWidth={12}
                        variant={loaderVariant}
                        {...loaderProps}
                    />
                )}
            </StyledPageLoading>
        )
    }
)

export default PageLoading
