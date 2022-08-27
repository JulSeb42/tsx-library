/*=============================================== PageLoading ===============================================*/

import React, { useEffect } from "react"

import Loader from "../Loader"

import * as Styles from "./styles"
import { PageLoadingProps } from "./types"

const PageLoading = ({ options, ...props }: PageLoadingProps) => {
    useEffect(() => document.body.classList.add("stop-scrolling"))

    return (
        <Styles.StyledPageLoading
            $backgroundColor={options?.backgroundColor || "primary"}
            {...props}
        >
            <Loader
                options={{
                    size: 64,
                    borderSize: 12,
                    color:
                        options?.backgroundColor === "white" &&
                        !options?.loaderColor
                            ? "primary"
                            : options?.loaderColor
                            ? options?.loaderColor
                            : "white",
                }}
            />
        </Styles.StyledPageLoading>
    )
}

export default PageLoading
