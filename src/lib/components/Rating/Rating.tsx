/*=============================================== Rating component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { generateNumbers, uuid, Flexbox, Icon } from "../../"
import { StarIcon, StarFullIcon } from "../../icons"
import { InputContainer } from "../InputContainer"

import { Button } from "./styles"
import type { RatingProps } from "./types"

const Rating = forwardRef(
    (
        {
            rating,
            setRating,
            icons,
            label,
            helper,
            helperBottom,
            id,
            readOnly,
            className,
            ...rest
        }: RatingProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const ratingFn = () => (
            <Flexbox
                alignItems="center"
                gap="xs"
                ref={ref}
                className={classNames(
                    "rating-container",
                    !label && !helper && !helperBottom && className
                )}
                {...rest}
            >
                {generateNumbers(0, 5).map((_, i) => (
                    <Button
                        as={readOnly ? "span" : "button"}
                        onClick={!readOnly ? () => setRating(i + 1) : undefined}
                        type="button"
                        className={classNames(
                            { "is-button": !readOnly },
                            "button-rating"
                        )}
                        key={uuid()}
                    >
                        {icons ? (
                            i >= rating ? (
                                typeof icons?.default === "string" ? (
                                    <Icon
                                        src={icons?.default}
                                        size={24}
                                        className="rating-icon rating-icon-default"
                                    />
                                ) : (
                                    icons?.default
                                )
                            ) : typeof icons?.checked === "string" ? (
                                <Icon
                                    src={icons?.checked}
                                    size={24}
                                    className="rating-icon rating-icon-checked"
                                />
                            ) : (
                                icons?.checked
                            )
                        ) : i >= rating ? (
                            <StarIcon
                                size={24}
                                className="rating-icon rating-icon-default"
                            />
                        ) : (
                            <StarFullIcon
                                size={24}
                                className="rating-icon rating-icon-checked"
                            />
                        )}
                    </Button>
                ))}
            </Flexbox>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                className={className}
            >
                {ratingFn()}
            </InputContainer>
        ) : (
            ratingFn()
        )
    }
)

export default Rating
