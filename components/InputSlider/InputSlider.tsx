/*=============================================== InputSlider component ===============================================*/

import { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"

import { Flexbox, Text, getPercentage } from "../../"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import type { InputSliderProps } from "./types"

const InputSlider = forwardRef(
    (
        {
            id,
            backgroundColor = "gray-200",
            validation,
            min = 0,
            max = 100,
            showMinMax,
            value = 50,
            showValue,
            label,
            helper,
            helperBottom,
            accentColor = "primary",
            ...rest
        }: InputSliderProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const [isVisible, setIsVisible] = useState(
            typeof showValue === "object" && showValue.onlyHover ? false : true
        )

        const getRangeWidth = getPercentage(value, max)

        const inputFn = () => (
            <Styles.StyledInputSlider
                ref={ref}
                id={id}
                min={min}
                max={max}
                value={value}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $rangeWidth={getRangeWidth}
                $validation={validation}
                onMouseEnter={
                    typeof showValue === "object" && showValue.onlyHover
                        ? () => setIsVisible(true)
                        : undefined
                }
                onMouseLeave={
                    typeof showValue === "object" && showValue.onlyHover
                        ? () => setIsVisible(false)
                        : undefined
                }
                {...rest}
            />
        )

        const fullInput = () =>
            showMinMax || showValue ? (
                <Flexbox alignItems="center" gap="xs">
                    {showMinMax && (
                        <Text
                            tag="small"
                            color={
                                typeof showMinMax === "string"
                                    ? showMinMax
                                    : "gray"
                            }
                        >
                            {min}
                        </Text>
                    )}

                    {showValue ? (
                        <Styles.SliderContainer>
                            {inputFn()}

                            <Styles.Value
                                $background={
                                    typeof showValue === "object" &&
                                    showValue.backgroundColor
                                        ? showValue.backgroundColor
                                        : undefined
                                }
                                $textColor={
                                    typeof showValue === "object" &&
                                    showValue.textColor
                                        ? showValue.textColor
                                        : "background"
                                }
                                $position={getRangeWidth}
                                $isVisible={isVisible}
                            >
                                {value}
                            </Styles.Value>
                        </Styles.SliderContainer>
                    ) : (
                        inputFn()
                    )}

                    {showMinMax && (
                        <Text
                            tag="small"
                            color={
                                typeof showMinMax === "string"
                                    ? showMinMax
                                    : "gray"
                            }
                        >
                            {max}
                        </Text>
                    )}
                </Flexbox>
            ) : (
                inputFn()
            )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {fullInput()}
            </InputContainer>
        ) : (
            fullInput()
        )
    }
)

export default InputSlider
