/*=============================================== Rating component ===============================================*/

import React, { forwardRef } from "react"

import { generateNumbers, uuid, Flexbox, Icon } from "../../"
import { InputContainer } from "../InputContainer"
import StarIcon from "../../icons/StarIcon"
import StarFullIcon from "../../icons/StarFullIcon"

import * as Styles from "./styles"
import { RatingProps } from "./types"

const Rating = forwardRef(
    (
        {
            rating,
            setRating,
            accentColor = "primary",
            icons,
            label,
            helper,
            helperBottom,
            id,
            readOnly,
            ...rest
        }: RatingProps,
        ref?: React.ForwardedRef<HTMLDivElement>
    ) => {
        const ratingFn = () => (
            <Flexbox alignItems="center" gap="xs" ref={ref} {...rest}>
                {generateNumbers(0, 5).map((_, i) => (
                    <Styles.Button
                        as={readOnly ? "span" : "button"}
                        onClick={!readOnly ? () => setRating(i + 1) : undefined}
                        $color={accentColor}
                        $isButton={!readOnly}
                        type="button"
                        key={uuid()}
                    >
                        {icons ? (
                            <Icon
                                src={
                                    i >= rating ? icons.default : icons.checked
                                }
                                size={24}
                            />
                        ) : i >= rating ? (
                            <StarIcon size={24} />
                        ) : (
                            <StarFullIcon size={24} />
                        )}
                    </Styles.Button>
                ))}
            </Flexbox>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {ratingFn()}
            </InputContainer>
        ) : (
            ratingFn()
        )
    }
)

export default Rating
