/*=============================================== ListGroup component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { Icon, Text, convertDateShort, Flexbox, uuid } from "../../"

import * as Styles from "./styles"
import type { ListGroupProps, ListGroupItemProps } from "./types"

export const ListItem = ({
    as,
    item: {
        text,
        subtext,
        badge,
        badgeColor = "primary",
        badgeContentColor = "background",
        date,
        onClick,
        disabled,
        ref,
        href,
        blank,
        color = "primary",
        to,
    },
    number,
    borderColor,
    ...rest
}: ListGroupItemProps) => (
    <Styles.Item
        as={as ? as : onClick ? "button" : to ? Link : href ? "a" : "span"}
        href={href}
        to={to}
        onClick={onClick}
        disabled={disabled}
        $borderColor={borderColor}
        $isHover={!!onClick || !!href || !!to}
        $color={color}
        ref={ref}
        target={(href || to) && blank && "_blank"}
        rel={(href || to) && blank && "noreferrer noopener"}
        {...rest}
    >
        <Flexbox justifyContent="space-between" gap="xxs">
            {number && (
                <Styles.NumberContainer>{number}</Styles.NumberContainer>
            )}

            <Styles.Title>{text}</Styles.Title>

            {badge && (
                <Styles.NumberContainer>
                    <Styles.Badge
                        $background={badgeColor}
                        $textColor={badgeContentColor}
                        $length={
                            typeof badge === "number"
                                ? badge.toString().length
                                : 0
                        }
                    >
                        {typeof badge === "string" ? (
                            <Icon src={badge} size={16 * 0.7} />
                        ) : typeof badge === "object" ? (
                            badge
                        ) : typeof badge === "number" ? (
                            badge
                        ) : (
                            ""
                        )}
                    </Styles.Badge>
                </Styles.NumberContainer>
            )}

            {date && (
                <Styles.NumberContainer>
                    <Text tag="small" color="gray">
                        {convertDateShort(new Date(date))}
                    </Text>
                </Styles.NumberContainer>
            )}
        </Flexbox>

        {subtext && (
            <Text tag="small" color="gray">
                {subtext}
            </Text>
        )}
    </Styles.Item>
)

export const ListGroup = forwardRef(
    (
        {
            as,
            items,
            showNumbers,
            maxHeight,
            bordersColor = "gray-200",
            accentColor = "primary",
            borderRadius = "m",
            ...rest
        }: ListGroupProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledListGroup
            ref={ref}
            as={as}
            $borderColor={bordersColor}
            $maxHeight={maxHeight}
            $borderRadius={borderRadius}
            {...rest}
        >
            {items.map((item, i) => (
                <ListItem
                    item={item}
                    color={accentColor}
                    number={showNumbers ? i + 1 : undefined}
                    borderColor={bordersColor}
                    key={uuid()}
                />
            ))}
        </Styles.StyledListGroup>
    )
)
