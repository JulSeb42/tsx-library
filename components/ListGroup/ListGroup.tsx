/*=============================================== ListGroup component ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import { Icon, Text, convertDateShort, Flexbox, uuid } from "../../"

import * as Styles from "./styles"
import { ListGroupProps, ListGroupItemProps } from "./types"

const ListItem = ({
    item: {
        text,
        subtext,
        badge,
        badgeColor = "primary",
        badgeContentColor = "background",
        date,
        to,
        onClick,
        disabled,
        ref,
    },
    number,
    borderColor,
    color,
    ...rest
}: ListGroupItemProps) => (
    <Styles.Item
        as={to ? Link : onClick ? "button" : "span"}
        to={to}
        onClick={onClick}
        disabled={disabled}
        $borderColor={borderColor}
        $isHover={!!to || !!onClick}
        $color={color}
        ref={ref}
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
                    <Text tag="small" color="gray-500">
                        {convertDateShort(new Date(date))}
                    </Text>
                </Styles.NumberContainer>
            )}
        </Flexbox>

        {subtext && (
            <Text tag="small" color="gray-500">
                {subtext}
            </Text>
        )}
    </Styles.Item>
)

const ListGroup = forwardRef(
    (
        {
            as,
            items,
            showNumbers,
            maxHeight,
            bordersColor = "gray-200",
            accentColor = "primary",
            ...rest
        }: ListGroupProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => (
        <Styles.StyledListGroup
            ref={ref}
            as={as}
            $borderColor={bordersColor}
            $maxHeight={maxHeight}
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

export default ListGroup
