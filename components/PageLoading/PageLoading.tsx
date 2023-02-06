/*=============================================== PageLoading component ===============================================*/

import React, { forwardRef, useEffect } from "react"

import { Loader } from "../../"

import * as Styles from "./styles"
import { PageLoadingProps } from "./types"

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
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        useEffect(() => {
            if (stopScrolling) {
                document.body.classList.add("stop-scrolling")
            }
        }, [stopScrolling])

        const loaderProps = {
            size: 64,
            color:
                backgroundColor === "white" && !loaderColor
                    ? "primary"
                    : loaderColor
                    ? loaderColor
                    : "white",
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
                        borderWidth={12}
                        variant={loaderVariant}
                        {...loaderProps}
                    />
                )}
            </Styles.StyledPageLoading>
        )
    }
)

export default PageLoading
