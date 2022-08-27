/*=============================================== Autocomplete component ===============================================*/

import React, { useState, forwardRef } from "react"

import Variables from "../../Variables"
import Icon from "../Icon"
import BaseInput from "../InputContainer"
import CloseCircleIcon from "../../icons/CloseCircleIcon"
import CheckCircleIcon from "../../icons/CheckCircleIcon"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { AutocompleteProps } from "./types"

const InputFunction = forwardRef(
    (
        {
            id,
            items,
            onClickItem,
            disabled,
            value,
            autoFocus,
            options,
            validation,
            ...props
        }: AutocompleteProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const [isOpen, setIsOpen] = useState(false)
        const handleOpen = () => setIsOpen(true)
        const handleClose = () => setTimeout(() => setIsOpen(false), 100)

        return (
            <Styles.InputContainer>
                {options?.icon && (
                    <Styles.IconContainer>
                        <Icon src={options.icon} size={20} color="primary" />
                    </Styles.IconContainer>
                )}

                <Styles.StyledInput
                    id={id}
                    onFocus={!disabled ? handleOpen : undefined}
                    onBlur={!disabled ? handleClose : undefined}
                    type="text"
                    $icon={!!options?.icon}
                    value={value}
                    autoFocus={autoFocus}
                    $validation={validation?.status}
                    ref={ref}
                    {...props}
                />

                {validation && (
                    <Styles.RightContainer $disabled={disabled}>
                        {validation &&
                            validation.status !== undefined &&
                            (validation.status === "passed" ? (
                                validation.iconPassed ? (
                                    <Icon
                                        src={validation.iconPassed}
                                        size={24}
                                        color="success"
                                    />
                                ) : (
                                    <CheckCircleIcon
                                        size={24}
                                        color={Variables.Colors.Success500}
                                    />
                                )
                            ) : validation.iconNotPassed ? (
                                <Icon
                                    src={validation.iconNotPassed}
                                    size={24}
                                    color="danger"
                                />
                            ) : (
                                <CloseCircleIcon
                                    size={24}
                                    color={Variables.Colors.Danger500}
                                />
                            ))}
                    </Styles.RightContainer>
                )}

                <Styles.List $isOpen={isOpen}>
                    {items.length > 0 ? (
                        items.slice(0, 20).map(item => (
                            <Styles.Item key={uuid()} onClick={onClickItem}>
                                {item}
                            </Styles.Item>
                        ))
                    ) : (
                        <Styles.Item $readOnly>
                            {options?.textEmpty || "No result!"}
                        </Styles.Item>
                    )}
                </Styles.List>
            </Styles.InputContainer>
        )
    }
)

const Autocomplete = forwardRef(
    (
        {
            id,
            items,
            onClickItem,
            disabled,
            value,
            autoFocus,
            options,
            validation,
            ...props
        }: AutocompleteProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const inputFunction = () => (
            <InputFunction
                id={id}
                items={items}
                onClickItem={onClickItem}
                disabled={disabled}
                value={value}
                autoFocus={autoFocus}
                options={options}
                validation={validation}
                ref={ref}
                {...props}
            />
        )

        return options?.label || options?.helper || options?.helperBottom ? (
            <BaseInput
                id={id}
                label={options.label}
                helper={options.helper}
                helperBottom={options.helperBottom}
            >
                {inputFunction()}
            </BaseInput>
        ) : (
            inputFunction()
        )
    }
)

export default Autocomplete
