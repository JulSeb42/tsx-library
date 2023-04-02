/*=============================================== Card component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import * as Styles from "./styles"
import type { CardProps } from "./types"

const Card = forwardRef(
    (
        {
            as,
            children,
            borderWidth,
            borderColor,
            borderStyle,
            borderRadius = "m",
            padding = "s",
            cursor,
            width = "100%",
            height,
            shadow,
            backgroundColor = "background",
            textColor = "currentColor",
            href,
            blank,
            onClick,
            inline,
            flexDirection,
            flexWrap,
            justifyContent,
            alignItems,
            justifyItems,
            alignContent,
            gap,
            columnGap,
            rowGap,
            ...rest
        }: CardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledCard
            ref={ref}
            as={as ? as : href ? "a" : "div"}
            href={href}
            target={href && blank && "_blank"}
            rel={href && blank && "noreferrer noopener"}
            onClick={onClick}
            $borderRadius={borderRadius}
            $padding={padding}
            $cursor={cursor}
            $width={width}
            $height={height}
            $textColor={textColor}
            $borderColor={borderColor}
            $borderWidth={borderWidth}
            $borderStyle={borderStyle}
            $shadow={shadow}
            $shadowDefault={typeof shadow === "object" && shadow.default}
            $shadowHover={typeof shadow === "object" && shadow.hover}
            $shadowActive={typeof shadow === "object" && shadow.active}
            $backgroundColor={backgroundColor}
            $inline={inline}
            $flexDirection={flexDirection}
            $flexWrap={flexWrap}
            $justifyContent={justifyContent}
            $alignItems={alignItems}
            $justifyItems={justifyItems}
            $alignContent={alignContent}
            $gap={gap}
            $columnGap={columnGap}
            $rowGap={rowGap}
            {...rest}
        >
            {children}
        </Styles.StyledCard>
    )
)

export default Card
