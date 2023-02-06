/*=============================================== Cover component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { CoverProps } from "./types"

const Cover = forwardRef(
    (
        {
            as,
            src,
            alt,
            children,
            overlay,
            align = "center",
            height = "100vh",
            gap = "s",
            textColor,
            ...rest
        }: CoverProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledCover
            ref={ref}
            as={as}
            $overlay={overlay}
            $height={height}
            {...rest}
        >
            <Styles.CoverImage src={src} alt={alt} height={height} />

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
)

export default Cover
