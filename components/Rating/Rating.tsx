/*=============================================== Rating component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { generateNumbers, uuid, Flexbox, Icon } from "../../"
import { StarIcon, StarFullIcon } from "../../icons"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import type { RatingProps } from "./types"

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
        ref?: ForwardedRef<HTMLDivElement>
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
                            i >= rating ? (
                                typeof icons?.default === "string" ? (
                                    <Icon src={icons?.default} size={24} />
                                ) : (
                                    icons?.default
                                )
                            ) : typeof icons?.checked === "string" ? (
                                <Icon src={icons?.checked} size={24} />
                            ) : (
                                icons?.checked
                            )
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
