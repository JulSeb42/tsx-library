/*=============================================== InputPhone component ===============================================*/

import React, { forwardRef, useEffect, useState, useRef } from "react"

import { useClickOutside, uuid, Icon } from "../../"
import { countries } from "../../utils/countries"
import { ListInputs, ListItem } from "../ListInputs"
import { RightContainer, ValidationComponent } from "../InputComponents"
import CaretDownIcon from "../../icons/CaretDownIcon"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import { InputPhoneProps, CountryType } from "./types"

const InputPhone = forwardRef(
    (
        {
            id,
            disabled,
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
            textEmpty = "Your search did not return any result.",
            searchIcon,
            ...rest
        }: InputPhoneProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        useEffect(() => {
            setSelectedCountry(
                countries.filter(country => country.code === defaultCountry)[0]
            )
        }, [defaultCountry, setSelectedCountry])

        const [isOpen, setIsOpen] = useState(false)

        const listRef = useRef<HTMLDivElement>(null)
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

        const getValidationStatus =
            typeof validation === "object" ? validation?.status : validation

        const searchIconColor =
            getValidationStatus === "not-passed" ? "danger" : accentColor

        const listItems = () => (
            <>
                {hasSearch && (
                    <Styles.SearchContainer>
                        {searchIcon ? (
                            <Icon
                                src={searchIcon}
                                size={16}
                                color={searchIconColor}
                            />
                        ) : (
                            <Styles.StyledIconSearch
                                size={16}
                                color={searchIconColor}
                            />
                        )}

                        <Styles.InputSearch
                            placeholder={searchPlaceholder}
                            onChange={handleSearch}
                            value={search}
                            $accentColor={accentColor}
                            $validation={getValidationStatus}
                            $backgroundColor={backgroundColor}
                        />
                    </Styles.SearchContainer>
                )}

                {results.length > 0 ? (
                    results.map(country => (
                        <ListItem
                            isActive={country === selectedCountry && true}
                            onClick={() => selectCountry(country)}
                            accentColor={accentColor}
                            validation={getValidationStatus}
                            backgroundColor={backgroundColor}
                            key={uuid()}
                        >
                            <Styles.Flag
                                src={country.flag}
                                alt={`Flag ${country.name}`}
                            />
                            <span>
                                ({country.dial_code}) {country.name}
                            </span>
                        </ListItem>
                    ))
                ) : (
                    <ListItem accentColor={accentColor} readOnly>
                        {textEmpty}
                    </ListItem>
                )}
            </>
        )

        const listProps = {
            isOpen: isOpen,
            accentColor: accentColor,
            validation: getValidationStatus,
            backgroundColor: backgroundColor,
            direction: listDirection,
        }

        const listFn = () =>
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

        const iconColor =
            getValidationStatus === "not-passed" && isOpen
                ? "danger"
                : isOpen
                ? accentColor
                : "gray"

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
                        <Icon src={iconButton} size={12} color={iconColor} />
                    ) : (
                        <CaretDownIcon size={12} color={iconColor} />
                    )}
                </Styles.Button>

                {listFn()}

                <Styles.CountryCode $backgroundColor={backgroundColor}>
                    {selectedCountry && selectedCountry.dial_code}
                </Styles.CountryCode>

                <Styles.Input
                    ref={ref}
                    id={id}
                    type="tel"
                    disabled={disabled}
                    $codeLength={
                        selectedCountry ? selectedCountry.dial_code.length : 3
                    }
                    $accentColor={accentColor}
                    $isListOpen={isOpen}
                    $validation={getValidationStatus}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    {...rest}
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
