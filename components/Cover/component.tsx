/*=============================================== Cover component ===============================================*/

import React, { Suspense } from "react"

import Fallback from "../Fallback"

import * as Styles from "./styles"
import { CoverProps } from "./types"

const CoverImage = React.lazy(() => import("./styles"))

const Cover = ({ src, alt, children, options, ...props }: CoverProps) => (
    <Styles.StyledCover
        $overlay={options?.overlay}
        $height={options?.height || "100vh"}
        {...props}
    >
        <Suspense
            fallback={
                <Fallback $width="100%" $height={options?.height || "100vh"} />
            }
        >
            <CoverImage src={src} alt={alt} />
        </Suspense>

        <Styles.Content $align={options?.align || "center"} $gap={options?.gap}>
            {children}
        </Styles.Content>
    </Styles.StyledCover>
)

export default Cover
