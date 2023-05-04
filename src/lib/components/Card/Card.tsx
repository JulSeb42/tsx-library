/*=============================================== Card component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import {
    variableBorderRadius,
    variableAllPaddings,
    stringifyPx,
    variableSpacer,
} from "../../"

import { StyledCard } from "./styles"
import type { CardProps } from "./types"

const Card = forwardRef(
    (
        {
            as,
            children,
            border,
            borderRadius = "m",
            padding = "s",
            width,
            maxWidth,
            height,
            href,
            blank,
            to,
            style,
            onClick,
            backgroundImg = null,
            inline,
            flexDirection = null,
            flexWrap = null,
            justifyContent = null,
            alignItems = null,
            justifyItems = null,
            alignContent = null,
            gap = null,
            columnGap = null,
            rowGap = null,
            ...rest
        }: CardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledCard
                ref={ref}
                as={
                    as
                        ? as
                        : onClick
                        ? "button"
                        : to
                        ? Link
                        : href
                        ? "a"
                        : "div"
                }
                href={href}
                to={to}
                target={(href || to) && blank && "_blank"}
                rel={(href || to) && blank && "noreferrer noopener"}
                onClick={onClick}
                style={{
                    ...variableBorderRadius(borderRadius, "card"),
                    ...variableAllPaddings(padding, "card"),
                    ["--card-width" as any]: width && stringifyPx(width),
                    ["--card-height" as any]: height && stringifyPx(height),
                    ["--card-max-width" as any]:
                        maxWidth && stringifyPx(maxWidth),
                    ["--card-background-image" as any]: backgroundImg,
                    ["--card-column-gap" as any]: variableSpacer(
                        columnGap ? columnGap : gap ? gap : null
                    ),
                    ["--card-row-gap" as any]: variableSpacer(
                        rowGap ? rowGap : gap ? gap : null
                    ),
                    ...style,
                }}
                data-inline={inline?.toString()}
                data-flex-direction={flexDirection}
                data-flex-wrap={flexWrap}
                data-justify-content={justifyContent}
                data-justify-items={justifyItems}
                data-align-content={alignContent}
                data-align-items={alignItems}
                $border={border}
                {...rest}
            >
                {children}
            </StyledCard>
        )
    }
)

export default Card
