/*=============================================== ListGroup component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { Text, convertDateShort, Flexbox, uuid, Badge } from "../../"

import * as Styles from "./styles"
import type { ListGroupProps, ListGroupItemProps } from "./types"

export const ListItem = ({
    as,
    item: {
        text,
        subtext,
        badge,
        badgeColor = "primary",
        date,
        onClick,
        disabled,
        ref,
        href,
        blank,
        to,
    },
    number,
    className,
    ...rest
}: ListGroupItemProps) => {
    const classes = classNames(
        { "is-hoverable": !!(to || href || onClick) },
        className
    )

    return (
        <Styles.Item
            as={as ? as : onClick ? "button" : to ? Link : href ? "a" : "span"}
            ref={ref}
            href={href}
            to={to}
            onClick={onClick}
            disabled={disabled}
            target={(href || to) && blank && "_blank"}
            rel={(href || to) && blank && "noreferrer noopener"}
            className={classes}
            {...rest}
        >
            <Flexbox
                justifyContent="space-between"
                gap="xxs"
                className="item-title-container"
            >
                {number && (
                    <Styles.NumberContainer className="item-number-container">
                        {number}.
                    </Styles.NumberContainer>
                )}

                <Styles.Title className="item-title">{text}</Styles.Title>

                {(badge || date) && (
                    <Styles.BadgeContainer className="item-badge-container">
                        {badge &&
                            (typeof badge === "object" ? (
                                badge.icon ? (
                                    <Badge
                                        icon={badge.icon}
                                        color={badgeColor}
                                        className="item-badge"
                                    />
                                ) : (
                                    <Badge
                                        number={badge.number}
                                        className="item-badge"
                                    />
                                )
                            ) : (
                                <Badge
                                    color={badgeColor}
                                    className="item-badge"
                                />
                            ))}

                        {date && (
                            <Text tag="small" className="item-date">
                                {convertDateShort(new Date(date))}
                            </Text>
                        )}
                    </Styles.BadgeContainer>
                )}
            </Flexbox>

            {subtext && (
                <Text tag="small" className="item-subtext">
                    {subtext}
                </Text>
            )}
        </Styles.Item>
    )
}

export const ListGroup = forwardRef(
    (
        { as, items, showNumbers, ...rest }: ListGroupProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledListGroup ref={ref} as={as} {...rest}>
                {items.map((item, i) => (
                    <ListItem
                        item={item}
                        number={showNumbers ? i + 1 : undefined}
                        key={uuid()}
                    />
                ))}
            </Styles.StyledListGroup>
        )
    }
)
