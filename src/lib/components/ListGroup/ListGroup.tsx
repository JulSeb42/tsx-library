/*=============================================== ListGroup component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { Text, convertDateShort, Flexbox, uuid, Badge } from "../../"

import {
    StyledListGroup,
    NumberContainer,
    Title,
    BadgeContainer,
    Item,
} from "./styles"
import type { ListGroupProps, ListGroupItemProps } from "./types"

export const ListItem = forwardRef(
    (
        {
            as,
            item: {
                text,
                subtext,
                badge,
                date,
                onClick,
                disabled,
                href,
                blank,
                to,
            },
            number,
            className,
            ...rest
        }: ListGroupItemProps,
        ref?: ForwardedRef<HTMLLIElement>
    ) => {
        return (
            <Item
                as={
                    as
                        ? as
                        : onClick
                        ? "button"
                        : to
                        ? Link
                        : href
                        ? "a"
                        : "span"
                }
                ref={ref}
                href={href}
                to={to}
                onClick={onClick}
                disabled={disabled}
                target={(href || to) && blank && "_blank"}
                rel={(href || to) && blank && "noreferrer noopener"}
                className={classNames(
                    { "is-hoverable": !!(to || href || onClick) },
                    className
                )}
                {...rest}
            >
                <Flexbox
                    justifyContent="space-between"
                    gap="xxs"
                    className="item-title-container"
                >
                    {number && (
                        <NumberContainer className="item-number-container">
                            {number}.
                        </NumberContainer>
                    )}

                    <Title className="item-title">{text}</Title>

                    {(badge || date) && (
                        <BadgeContainer className="item-badge-container">
                            {badge &&
                                (typeof badge === "object" ? (
                                    badge.icon ? (
                                        <Badge
                                            icon={badge.icon}
                                            color={badge.color || "primary"}
                                            className="item-badge"
                                        />
                                    ) : badge.number ? (
                                        <Badge
                                            number={badge.number}
                                            color={badge?.color || "primary"}
                                            className="item-badge"
                                        />
                                    ) : (
                                        <Badge
                                            color={badge?.color || "primary"}
                                            className="item-badge"
                                        />
                                    )
                                ) : (
                                    <Badge className="item-badge" />
                                ))}

                            {date && (
                                <Text tag="small" className="item-date">
                                    {convertDateShort(new Date(date))}
                                </Text>
                            )}
                        </BadgeContainer>
                    )}
                </Flexbox>

                {subtext && (
                    <Text tag="small" className="item-subtext">
                        {subtext}
                    </Text>
                )}
            </Item>
        )
    }
)

export const ListGroup = forwardRef(
    (
        { as, items, showNumbers, ...rest }: ListGroupProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledListGroup ref={ref} as={as} {...rest}>
                {items.map((item, i) => (
                    <ListItem
                        item={item}
                        number={showNumbers ? i + 1 : undefined}
                        key={uuid()}
                    />
                ))}
            </StyledListGroup>
        )
    }
)
