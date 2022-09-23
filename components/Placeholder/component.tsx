/*=============================================== Placeholder component ===============================================*/

import React, { forwardRef } from "react"

import Text from "../Text"

import * as Styles from "./styles"
import { PlaceholderProps } from "./types"

const Placeholder = forwardRef(
    (
        {
            width = 100,
            height = 100,
            aspectRatio,
            background = "gray-200",
            shadow,
            borderRadius = "m",
            children,
            textColor,
            as,
            fontSize,
            customFontSize,
            fontWeight,
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
            $fontSize={fontSize}
            $customFontSize={customFontSize}
            $fontWeight={fontWeight}
            {...props}
        >
            {children}
        </Styles.StyledPlaceholder>
    )
)

export default Placeholder
