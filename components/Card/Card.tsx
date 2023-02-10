/*=============================================== Card component ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import * as Styles from "./styles"
import { CardProps } from "./types"

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
            to,
            href,
            blank,
            onClick,
            ...rest
        }: CardProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledCard
            ref={ref}
            as={as ? as : to ? Link : href ? "a" : "div"}
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
            to={to}
            target={(to || href) && blank && "_blank"}
            rel={(to || href) && blank && "noreferrer noopener"}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Styles.StyledCard>
    )
)

export default Card
