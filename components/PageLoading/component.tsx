/*=============================================== PageLoading ===============================================*/

import React, { useEffect } from "react"

import Loader from "../Loader"

import * as Styles from "./styles"
import { PageLoadingProps } from "./types"

const PageLoading = ({
    backgroundColor = "primary",
    loaderColor,
    loaderVariant = 1,
    stopScrolling,
    ...props
}: PageLoadingProps) => {
    useEffect(() => {
        if (stopScrolling) {
            document.body.classList.add("stop-scrolling")
        }
    }, [stopScrolling])

    return (
        <Styles.StyledPageLoading $backgroundColor={backgroundColor} {...props}>
            <Loader
                size={64}
                borderSize={12}
                color={
                    backgroundColor === "white" && !loaderColor
                        ? "primary"
                        : loaderColor
                        ? loaderColor
                        : "white"
                }
                variant={loaderVariant}
            />
        </Styles.StyledPageLoading>
    )
}

export default PageLoading
