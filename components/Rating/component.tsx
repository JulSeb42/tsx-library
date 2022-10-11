/*=============================================== Rating ===============================================*/

import React from "react"
import { generateNumbers } from "ts-utils-julseb"
import { uuid } from "../../utils/utils"

import Flexbox from "../Flexbox"
import StarIcon from "../../icons/StarIcon"
import StarFullIcon from "../../icons/StarFullIcon"
import Icon from "../Icon"
import InputContainer from "../InputContainer"

import * as Styles from "./styles"
import { RatingProps } from "./types"

const Rating = ({
    rating,
    setRating,
    accentColor = "primary",
    icons,
    label,
    helper,
    helperBottom,
    id,
    readOnly,
    ...props
}: RatingProps) => {
    const ratingFunc = () => (
        <Flexbox alignItems="center" gap="xs" {...props}>
            {/* {generateNumbers(0, 5).map((_, i) => (
                <Styles.Button
                    as={readOnly ? "span" : "button"}
                    onClick={!readOnly && () => setRating(i + 1)}
                    $color={accentColor}
                    key={uuid()}
                >
                    {icons ? (
                        <Icon
                            src={i >= rating ? icons.default : icons.checked}
                            size={24}
                        />
                    ) : i >= rating ? (
                        <StarIcon size={24} />
                    ) : (
                        <StarFullIcon size={24} />
                    )}
                </Styles.Button>
            ))} */}
            {readOnly
                ? generateNumbers(0, 5).map((_, i) => (
                      <Styles.Button
                          as="span"
                          $color={accentColor}
                          key={uuid()}
                      >
                          {icons ? (
                              <Icon
                                  src={
                                      i >= rating
                                          ? icons.default
                                          : icons.checked
                                  }
                                  size={24}
                              />
                          ) : i >= rating ? (
                              <StarIcon size={24} />
                          ) : (
                              <StarFullIcon size={24} />
                          )}
                      </Styles.Button>
                  ))
                : generateNumbers(0, 5).map((_, i) => (
                      <Styles.Button
                          onClick={() => setRating(i + 1)}
                          $color={accentColor}
                          $isButton
                          key={uuid()}
                      >
                          {icons ? (
                              <Icon
                                  src={
                                      i >= rating
                                          ? icons.default
                                          : icons.checked
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
            {ratingFunc()}
        </InputContainer>
    ) : (
        ratingFunc()
    )
}

export default Rating
