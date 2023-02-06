/*=============================================== Placeholder component ===============================================*/

import React, { forwardRef } from "react"

import * as Styles from "./styles"
import { PlaceholderProps } from "./types"

const Placeholder = forwardRef(
    (
        {
            as,
            width = 100,
            height = 100,
            aspectRatio,
            background = "gray-200",
            shadow,
            borderRadius = "m",
            children,
            fontSize = "body",
            customFontSize,
            fontWeight = "regular",
            textColor = "font",
            ...rest
        }: PlaceholderProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledPlaceholder
            ref={ref}
            as={as}
            $width={width}
            $height={height}
            $aspectRatio={aspectRatio}
            $background={background}
            $shadow={shadow}
            $borderRadius={borderRadius}
            $fontSize={fontSize}
            $customFontSize={customFontSize}
            $fontWeight={fontWeight}
            $textColor={textColor}
            {...rest}
        >
            {children}
        </Styles.StyledPlaceholder>
    )
)

export default Placeholder
