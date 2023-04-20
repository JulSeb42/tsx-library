/*=============================================== InputSlider component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Flexbox, getPercentage } from "../../"
import { InputContainer } from "../InputContainer"

import { SliderContainer, StyledInputSlider, Value, MinMax } from "./styles"
import type { InputSliderProps } from "./types"

const InputSlider = forwardRef(
    (
        {
            id,
            validation,
            min = 0,
            max = 100,
            showMinMax,
            value = 50,
            showValue,
            label,
            helper,
            helperBottom,
            className,
            style,
            ...rest
        }: InputSliderProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const [isVisible, setIsVisible] = useState(
            showValue === "always" ? true : false
        )

        const getRangeWidth = getPercentage(value, max)

        const inputFn = () => (
            <StyledInputSlider
                ref={ref}
                id={id}
                min={min}
                max={max}
                value={value}
                onMouseEnter={
                    showValue === "hover" ? () => setIsVisible(true) : undefined
                }
                onMouseLeave={
                    showValue === "hover"
                        ? () => setIsVisible(false)
                        : undefined
                }
                data-validation={validation}
                style={{
                    ["--range-width" as any]: `${getRangeWidth}%`,
                }}
                {...rest}
            />
        )

        const fullInput = () =>
            showMinMax || showValue ? (
                <Flexbox alignItems="center" gap="xs">
                    {showMinMax && <MinMax tag="small">{min}</MinMax>}

                    {showValue ? (
                        <SliderContainer>
                            {inputFn()}

                            <Value
                                className={classNames({ visible: isVisible })}
                                style={{
                                    ["--cursor-position" as any]: `calc(${getRangeWidth}% + ${
                                        -8 - getRangeWidth * 0.15
                                    }px)`,
                                }}
                            >
                                {value}
                            </Value>
                        </SliderContainer>
                    ) : (
                        inputFn()
                    )}

                    {showMinMax && <MinMax>{max}</MinMax>}
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
            >
                {fullInput()}
            </InputContainer>
        ) : (
            fullInput()
        )
    }
)

export default InputSlider
