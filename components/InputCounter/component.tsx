/*=============================================== InputCounter component ===============================================*/

import React from "react"

import InputContainer from "../InputContainer"
import PlusIcon from "../../icons/PlusIcon"
import MinusIcon from "../../icons/MinusIcon"
import ButtonIcon from "../ButtonIcon"

import * as Styles from "./styles"
import { InputCounterProps } from "./types"

const InputCounter = ({
    value,
    id,
    isInputEditable = true,
    icons,
    step = 1,
    min,
    max,
    setValue,
    buttons,
    options,
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
        const active = parseInt(e.target.value)
        setValue(min && active < min ? min : max && active > max ? max : active)
    }

    const optionsButton = {
        size: 32,
        ...buttons,
    }

    const propsButtons = {
        minus: {
            options: optionsButton,
            onClick: handleMinus,
            disabled: !!(min && value <= min),
        },
        plus: {
            options: optionsButton,
            onClick: handlePlus,
            disabled: !!(max && value >= max),
        },
    }

    const inputFunction = () => (
        <Styles.StyledInputCounter>
            {icons?.minus ? (
                <ButtonIcon
                    icon={icons?.minus}
                    type="button"
                    {...propsButtons.minus}
                />
            ) : (
                <ButtonIcon
                    libicon={<MinusIcon size={optionsButton.size * 0.6} />}
                    type="button"
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
                    {...props}
                />
            ) : (
                <Styles.Input as="span" $isEditable={false} {...props}>
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
                    libicon={<PlusIcon size={optionsButton.size * 0.6} />}
                    type="button"
                    {...propsButtons.plus}
                />
            )}
        </Styles.StyledInputCounter>
    )

    return options ? (
        <InputContainer
            id={id}
            label={options.label}
            helper={options.helper}
            helperBottom={options.helperBottom}
        >
            {inputFunction()}
        </InputContainer>
    ) : (
        inputFunction()
    )
}

export default InputCounter
