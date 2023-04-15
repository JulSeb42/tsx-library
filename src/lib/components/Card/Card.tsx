/*=============================================== Card component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { variableBorderRadius, variableAllPaddings, stringifyPx } from "../../"

import * as Styles from "./styles"
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
            height,
            href,
            blank,
            to,
            style,
            onClick,
            backgroundImg = null,
            ...rest
        }: CardProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const styles = {
            ...variableBorderRadius(borderRadius, "card"),
            ...variableAllPaddings(padding, "card"),
            ["--card-width" as any]: width && stringifyPx(width),
            ["--card-height" as any]: height && stringifyPx(height),
            ["--card-background-image" as any]: backgroundImg,
            ...style,
        }

        return (
            <Styles.StyledCard
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
                style={styles}
                $border={border}
                {...rest}
            >
                {children}
            </Styles.StyledCard>
        )
    }
)

export default Card
