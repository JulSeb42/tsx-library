/*=============================================== InputCounter component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef, ChangeEvent } from "react"

import { ButtonIcon } from "../../"
import { MinusIcon, PlusIcon } from "../../icons"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
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
            buttons,
            label,
            helper,
            helperBottom,
            accentColor = "primary",
            disabled,
            backgroundColorInput,
            inputVariant = "rounded",
            labelButtons,
            showButtonsLabels,
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
            color: accentColor,
            showLabel: showButtonsLabels,
            ...buttons,
        }

        const propsButtons = {
            minus: {
                ...optionsButton,
                onClick: handleMinus,
                disabled: !!(min && value <= min) || disabled,
                label: labelButtons?.minus || "Minus",
            },
            plus: {
                ...optionsButton,
                onClick: handlePlus,
                disabled: !!(max && value >= max) || disabled,
                label: labelButtons?.plus || "Plus",
            },
        }

        const inputFn = () => (
            <Styles.StyledInputCounter>
                <ButtonIcon
                    icon={
                        icons?.minus || (
                            <MinusIcon size={optionsButton.size * 0.7} />
                        )
                    }
                    type="button"
                    {...propsButtons.minus}
                />

                {isInputEditable ? (
                    <Styles.Input
                        $isEditable={true}
                        id={id}
                        value={value}
                        onChange={handleChange}
                        type="number"
                        disabled={disabled}
                        $accentColor={accentColor}
                        $disabled={disabled}
                        $backgroundColor={backgroundColorInput}
                        $variant={inputVariant}
                        {...rest}
                    />
                ) : (
                    <Styles.Input
                        as="span"
                        $isEditable={false}
                        $accentColor={accentColor}
                        $disabled={disabled}
                        ref={ref}
                        {...rest}
                    >
                        {value}
                    </Styles.Input>
                )}

                <ButtonIcon
                    icon={
                        icons?.plus || (
                            <PlusIcon size={optionsButton.size * 0.7} />
                        )
                    }
                    type="button"
                    {...propsButtons.plus}
                />
            </Styles.StyledInputCounter>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default InputCounter
