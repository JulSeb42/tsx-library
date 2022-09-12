/*=============================================== Cover component ===============================================*/

import React, { Suspense } from "react"

import Fallback from "../Fallback"

import * as Styles from "./styles"
import { CoverProps } from "./types"

const CoverImage = React.lazy(() => import("./styles"))

const Cover = ({
    src,
    alt,
    children,
    overlay,
    align = "center",
    height = "100vh",
    gap,
    textColor,
    ...props
}: CoverProps) => (
    <Styles.StyledCover $overlay={overlay} $height={height} {...props}>
        <Suspense fallback={<Fallback $width="100%" $height={height} />}>
            <CoverImage src={src} alt={alt} />
        </Suspense>

        <Styles.Content
            $color={
                textColor
                    ? textColor
                    : overlay === "gradient-white" || overlay === "white"
                    ? "black"
                    : "white"
            }
            $align={align}
            $gap={gap}
        >
            {children}
        </Styles.Content>
    </Styles.StyledCover>
)

export default Cover
