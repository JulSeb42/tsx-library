/*=============================================== Cover component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { stringifyPx } from "../../"

import { StyledCover, Content, CoverImage } from "./styles"
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
            flexDirection = "column",
            justifyContent = "center",
            alignItems = "center",
            padding = "xxl",
            style,
            ...rest
        }: CoverProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <StyledCover
            ref={ref}
            as={as}
            data-overlay={overlay}
            style={{
                ["--cover-height" as any]: height && stringifyPx(height),
                ...style,
            }}
            {...rest}
        >
            <CoverImage
                src={src}
                alt={alt}
                height={height}
                className="cover-image"
            />

            <Content
                data-overlay={overlay}
                className="cover-content"
                gap={gap}
                flexDirection={flexDirection}
                justifyContent={justifyContent}
                alignItems={alignItems}
                padding={padding}
            >
                {children}
            </Content>
        </StyledCover>
    )
)

export default Cover
