/*=============================================== InputPhone ===============================================*/

import React, { useRef, forwardRef } from "react"

import InputContainer from "../InputContainer"
import Icon from "../Icon"
import CaretDownIcon from "../../icons/CaretDownIcon"
import CheckCircleIcon from "../../icons/CheckCircleIcon"
import CloseCircleIcon from "../../icons/CloseCircleIcon"
import Variables from "../../Variables"
import useClickOutside from "../../hooks/useClickOutside"

import * as Styles from "./styles"
import { InputPhoneProps, ItemProps } from "./types"

const InputPhone = forwardRef(
    (
        {
            isOpen,
            setIsOpen,
            id,
            selectedCountry,
            options,
            children,
            input,
            validation,
            disabled,
            search,
            ...props
        }: InputPhoneProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const listRef = useRef<HTMLButtonElement>(null)
        const onClickOutside = () => setIsOpen(false)
        useClickOutside(listRef, onClickOutside)

        const inputContent = () => (
            <Styles.StyledInputPhone $isOpen={isOpen}>
                <Styles.Button type="button" onClick={() => setIsOpen(!isOpen)}>
                    <Styles.Flag
                        src={selectedCountry.flag}
                        alt={`Flag ${selectedCountry.name}`}
                    />

                    {options?.iconButton ? (
                        <Icon src={options.iconButton} size={12} />
                    ) : (
                        <CaretDownIcon size={12} />
                    )}
                </Styles.Button>

                <Styles.List $isOpen={isOpen} ref={listRef}>
                    {search && (
                        <Styles.SearchContainer>
                            <Styles.StyledIconSearch
                                size={16}
                                color="primary"
                            />

                            <Styles.InputSearch
                                placeholder={search.placeholder || "Search"}
                                onChange={search.handleSearch}
                                value={search.value}
                            />
                        </Styles.SearchContainer>
                    )}

                    {children}
                </Styles.List>

                <Styles.CountryCode>
                    {selectedCountry.dial_code}
                </Styles.CountryCode>

                <Styles.Input
                    $codeLength={selectedCountry.dial_code.length}
                    id={id}
                    value={input.value}
                    onChange={input.onChange}
                    type="tel"
                    disabled={disabled}
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
            </Styles.StyledInputPhone>
        )

        return options?.label || options?.helper || options?.helperBottom ? (
            <InputContainer
                id={id}
                label={options.label}
                helper={options.helper}
                helperBottom={options.helperBottom}
            >
                {inputContent()}
            </InputContainer>
        ) : (
            inputContent()
        )
    }
)

const InputPhoneItem = forwardRef(
    (
        { country, onClick, isActive, ...props }: ItemProps,
        ref?: React.ForwardedRef<HTMLSpanElement>
    ) => {
        return (
            <Styles.Item
                $isActive={isActive}
                onClick={onClick}
                ref={ref}
                {...props}
            >
                <Styles.Flag src={country.flag} alt={`Flag ${country.name}`} />
                <span>
                    ({country.dial_code}) {country.name}
                </span>
            </Styles.Item>
        )
    }
)

export { InputPhone, InputPhoneItem }
