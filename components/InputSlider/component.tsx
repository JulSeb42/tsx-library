/*=============================================== InputSlider component ===============================================*/

import React, { useState } from "react"
import { getPercentage } from "ts-utils-julseb"

import InputContainer from "../InputContainer"
import Flexbox from "../Flexbox"
import Text from "../Text"

import * as Styles from "./styles"
import { InputSliderProps } from "./types"

const InputSlider = ({
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
    onChange,
    ...props
}: InputSliderProps) => {
    const [isVisible, setIsVisible] = useState(
        typeof showValue === "object" && showValue.onlyHover ? false : true
    )

    const enterValue = () => setIsVisible(true)
    const leaveValue = () => setIsVisible(false)

    const getRangeWidth = getPercentage(value, max)

    const inputFunction = () => (
        <Styles.StyledInputSlider
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            $accentColor={accentColor}
            $backgroundColor={backgroundColor}
            $rangeWidth={getRangeWidth}
            $validation={validation}
            onMouseEnter={
                typeof showValue === "object" && showValue.onlyHover
                    ? enterValue
                    : undefined
            }
            onMouseLeave={
                typeof showValue === "object" && showValue.onlyHover
                    ? leaveValue
                    : undefined
            }
            id={id}
            {...props}
        />
    )

    const fullInput = () =>
        showMinMax || showValue ? (
            <Flexbox alignItems="center" gap="xs">
                {showMinMax && (
                    <Text
                        tag="small"
                        color={
                            typeof showMinMax === "string" ? showMinMax : "gray"
                        }
                    >
                        {min}
                    </Text>
                )}

                {showValue ? (
                    <Styles.SliderContainer>
                        {inputFunction()}

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
                    inputFunction()
                )}

                {showMinMax && (
                    <Text
                        tag="small"
                        color={
                            typeof showMinMax === "string" ? showMinMax : "gray"
                        }
                    >
                        {max}
                    </Text>
                )}
            </Flexbox>
        ) : (
            inputFunction()
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

export default InputSlider
