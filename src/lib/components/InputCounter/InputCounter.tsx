/*=============================================== InputCounter component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import classNames from "classnames"

import { ButtonIcon } from "../../"
import { MinusIcon, PlusIcon } from "../../icons"
import { InputContainer } from "../InputContainer"

import { StyledInputCounter, Input } from "./styles"
import type { InputCounterProps } from "./types"

const InputCounter = forwardRef(
    (
        {
            id,
            value,
            setValue,
            isInputEditable = true,
            step = 1,
            min,
            max,
            icons,
            label,
            helper,
            helperBottom,
            disabled,
            backgroundColorInput,
            labelButtons,
            showButtonsLabels,
            className,
            ...rest
        }: InputCounterProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const handleMinus = () =>
            setValue(
                min && value - step < min
                    ? min
                    : max && value - max > max
                    ? max
                    : value - step
            )

        const handlePlus = () =>
            setValue(
                min && value + step < min
                    ? min
                    : max && value + step > max
                    ? max
                    : value + step
            )

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const active = parseFloat(e.target.value)
            setValue(
                min && active < min ? min : max && active > max ? max : active
            )
        }

        const optionsButton = {
            size: 32,
            showLabel: showButtonsLabels,
        }

        const inputFn = () => (
            <StyledInputCounter
                className={classNames("input-counter-container", className)}
            >
                <ButtonIcon
                    icon={
                        icons?.minus || (
                            <MinusIcon size={optionsButton.size * 0.7} />
                        )
                    }
                    type="button"
                    color="primary"
                    onClick={handleMinus}
                    disabled={!!(min && value <= min) || disabled}
                    label={labelButtons?.minus || "Minus"}
                    {...optionsButton}
                />

                {isInputEditable ? (
                    <Input
                        id={id}
                        value={value}
                        onChange={handleChange}
                        type="number"
                        disabled={disabled}
                        className={classNames(
                            "is-editable",
                            { disabled: disabled },
                            "input input-counter"
                        )}
                        data-background={backgroundColorInput}
                        {...rest}
                    />
                ) : (
                    <Input
                        as="span"
                        ref={ref}
                        className={classNames("input input-counter", {
                            disabled: disabled,
                        })}
                        {...rest}
                    >
                        {value}
                    </Input>
                )}

                <ButtonIcon
                    icon={
                        icons?.plus || (
                            <PlusIcon size={optionsButton.size * 0.7} />
                        )
                    }
                    color="primary"
                    type="button"
                    onClick={handlePlus}
                    disabled={!!(max && value >= max) || disabled}
                    label={labelButtons?.plus || "Plus"}
                    {...optionsButton}
                />
            </StyledInputCounter>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default InputCounter
