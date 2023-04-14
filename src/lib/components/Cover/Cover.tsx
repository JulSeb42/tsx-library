/*=============================================== Cover component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { CoverProps } from "./types"

const Cover = forwardRef(
    (
        {
            as,
            src,
            alt,
            children,
            overlay,
            height = "100vh",
            gap = "s",
            textColor = "white",
            flexDirection = "column",
            flexWrap,
            justifyContent = "center",
            justifyItems,
            alignContent,
            alignItems = "center",
            textAlign = "center",
            columnGap,
            rowGap,
            padding = {
                topBottom: "xxl",
                leftRight: "xxl",
            },
            ...rest
        }: CoverProps,
        ref?: ForwardedRef<HTMLDivElement>
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
                $gap={gap}
                $alignContent={alignContent}
                $alignItems={alignItems}
                $columnGap={columnGap}
                $flexDirection={flexDirection}
                $flexWrap={flexWrap}
                $height={height}
                $justifyContent={justifyContent}
                $justifyItems={justifyItems}
                $padding={padding}
                $rowGap={rowGap}
                $textAlign={textAlign}
            >
                {children}
            </Styles.Content>
        </Styles.StyledCover>
    )
)

export default Cover
