/*=============================================== Placeholder component ===============================================*/

import React, { forwardRef } from "react"

import Text from "../Text"

import * as Styles from "./styles"
import { PlaceholderProps } from "./types"

const Placeholder = forwardRef(
    (
        {
            width = "100px",
            height = "100px",
            aspectRatio,
            background = "gray-200",
            shadow,
            borderRadius = "m",
            children,
            textColor,
            as,
            ...props
        }: PlaceholderProps,
        ref?: React.ForwardedRef<HTMLDivElement | HTMLParagraphElement>
    ) => (
        <Styles.StyledPlaceholder
            as={as ? as : children ? Text : "div"}
            color={textColor}
            ref={ref}
            $width={width}
            $height={height}
            $aspectRatio={aspectRatio}
            $background={background}
            $shadow={shadow}
            $borderRadius={borderRadius}
            {...props}
        >
            {children}
        </Styles.StyledPlaceholder>
    )
)

export default Placeholder
