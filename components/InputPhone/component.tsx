/*=============================================== InputPhone ===============================================*/

import React, { useRef, forwardRef, useState, useEffect } from "react"
import { uuid } from "../../utils/utils"

import InputContainer from "../InputContainer"
import Icon from "../Icon"
import CaretDownIcon from "../../icons/CaretDownIcon"
import useClickOutside from "../../hooks/useClickOutside"
import { ValidationComponent, RightContainer } from "../InputComponents"
import countries from "../../utils/countries"
import { ListInputs, ListItem } from "../ListInputs"

import * as Styles from "./styles"
import { InputPhoneProps, CountryType } from "./types"

const InputPhone = forwardRef(
    (
        {
            id,
            disabled,
            value,
            onChange,
            defaultCountry = "de",
            selectedCountry = undefined,
            setSelectedCountry,
            iconButton,
            label,
            helper,
            helperBottom,
            accentColor = "primary",
            validation,
            searchPlaceholder = "Search",
            hasSearch = true,
            backgroundColor,
            listVariant,
            listShadow,
            listDirection,
            variant,
            ...props
        }: InputPhoneProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        useEffect(() => {
            setSelectedCountry(
                countries.filter(country => country.code === defaultCountry)[0]
            )
        }, [defaultCountry, setSelectedCountry])

        const [isOpen, setIsOpen] = useState(false)

        const listRef = useRef<HTMLButtonElement>(null)
        const onClickOutside = () => setIsOpen(false)
        useClickOutside(listRef, onClickOutside)

        const [search, setSearch] = useState("")
        const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)

        const results = countries.filter(
            country =>
                country.name.toLowerCase().includes(search.toLowerCase()) ||
                country.dial_code.includes(search.toLowerCase()) ||
                country.code.toLowerCase().includes(search.toLowerCase())
        )

        const selectCountry = (value: CountryType) => {
            setSelectedCountry(value)
            setIsOpen(false)
            setSearch("")
        }

        const listItems = () => (
            <>
                {hasSearch && (
                    <Styles.SearchContainer>
                        <Styles.StyledIconSearch
                            size={16}
                            color={
                                validation?.status === "not-passed"
                                    ? "danger"
                                    : accentColor
                            }
                        />

                        <Styles.InputSearch
                            placeholder={searchPlaceholder}
                            onChange={handleSearch}
                            value={search}
                            $accentColor={accentColor}
                            $validation={validation?.status}
                            $backgroundColor={backgroundColor}
                        />
                    </Styles.SearchContainer>
                )}

                {results.map(country => (
                    <ListItem
                        isActive={country === selectedCountry && true}
                        onClick={() => selectCountry(country)}
                        accentColor={accentColor}
                        validation={validation?.status}
                        backgroundColor={backgroundColor}
                        key={uuid()}
                        {...props}
                    >
                        <Styles.Flag
                            src={country.flag}
                            alt={`Flag ${country.name}`}
                        />
                        <span>
                            ({country.dial_code}) {country.name}
                        </span>
                    </ListItem>
                ))}
            </>
        )

        const listProps = {
            isOpen: isOpen,
            accentColor: accentColor,
            validation: validation?.status,
            backgroundColor: backgroundColor,
            direction: listDirection,
        }

        const listFunction = () =>
            listVariant === "bordered" ? (
                <ListInputs {...listProps} variant={listVariant}>
                    {listItems()}
                </ListInputs>
            ) : (
                <ListInputs
                    {...listProps}
                    variant={listVariant}
                    shadow={listShadow}
                >
                    {listItems()}
                </ListInputs>
            )

        const inputContent = () => (
            <Styles.StyledInputPhone $isOpen={isOpen} ref={listRef}>
                <Styles.Button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    $variant={variant}
                >
                    <Styles.Flag
                        src={selectedCountry && selectedCountry.flag}
                        alt={`Flag ${selectedCountry && selectedCountry.name}`}
                    />

                    {iconButton ? (
                        <Icon
                            src={iconButton}
                            size={12}
                            color={
                                validation?.status === "not-passed" && isOpen
                                    ? "danger"
                                    : isOpen
                                    ? accentColor
                                    : "gray"
                            }
                        />
                    ) : (
                        <CaretDownIcon
                            size={12}
                            color={
                                validation?.status === "not-passed" && isOpen
                                    ? "danger"
                                    : isOpen
                                    ? accentColor
                                    : "gray"
                            }
                        />
                    )}
                </Styles.Button>

                {listFunction()}

                <Styles.CountryCode $backgroundColor={backgroundColor}>
                    {selectedCountry && selectedCountry.dial_code}
                </Styles.CountryCode>

                <Styles.Input
                    $codeLength={
                        selectedCountry ? selectedCountry.dial_code.length : 3
                    }
                    id={id}
                    value={value}
                    onChange={onChange}
                    type="tel"
                    disabled={disabled}
                    ref={ref}
                    $accentColor={accentColor}
                    $isListOpen={isOpen}
                    $validation={validation?.status}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...props}
                />

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </Styles.StyledInputPhone>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
            >
                {inputContent()}
            </InputContainer>
        ) : (
            inputContent()
        )
    }
)

export default InputPhone
