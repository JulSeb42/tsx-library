/*=============================================== InputCounter component ===============================================*/

import React from "react"

import InputContainer from "../InputContainer"
import PlusIcon from "../../icons/PlusIcon"
import MinusIcon from "../../icons/MinusIcon"
import ButtonIcon from "../ButtonIcon"

import * as Styles from "./styles"
import { InputCounterProps } from "./types"

const InputCounter = ({
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
    ...props
}: InputCounterProps) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const active = parseFloat(e.target.value)
        setValue(min && active < min ? min : max && active > max ? max : active)
    }

    const optionsButton = {
        size: 32,
        color: accentColor,
        ...buttons,
    }

    const propsButtons = {
        minus: {
            ...optionsButton,
            onClick: handleMinus,
            disabled: !!(min && value <= min) || disabled,
        },
        plus: {
            ...optionsButton,
            onClick: handlePlus,
            disabled: !!(max && value >= max) || disabled,
        },
    }

    const inputFunction = () => (
        <Styles.StyledInputCounter>
            {icons?.minus ? (
                <ButtonIcon icon={icons?.minus} {...propsButtons.minus} />
            ) : (
                <ButtonIcon
                    libicon={<MinusIcon size={optionsButton.size * 0.7} />}
                    {...propsButtons.minus}
                />
            )}

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
                    {...props}
                />
            ) : (
                <Styles.Input
                    as="span"
                    $isEditable={false}
                    $accentColor={accentColor}
                    $disabled={disabled}
                    {...props}
                >
                    {value}
                </Styles.Input>
            )}

            {icons?.plus ? (
                <ButtonIcon
                    icon={icons?.plus}
                    type="button"
                    {...propsButtons.plus}
                />
            ) : (
                <ButtonIcon
                    libicon={<PlusIcon size={optionsButton.size * 0.7} />}
                    type="button"
                    {...propsButtons.plus}
                />
            )}
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
            {inputFunction()}
        </InputContainer>
    ) : (
        inputFunction()
    )
}

export default InputCounter
