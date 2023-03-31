/*=============================================== InputPhone component ===============================================*/

import { forwardRef, useEffect, useState, useRef } from "react"
import type { ForwardedRef, ChangeEvent } from "react"

import { useClickOutside, uuid, Icon } from "../../"
import { CaretDownIcon } from "../../icons"
import type { InputPhoneCountryType } from "../../types"
import { countries } from "../../utils/countries"
import { ListInputs, ListItem } from "../ListInputs"
import { RightContainer, ValidationComponent } from "../InputComponents"
import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import type { InputPhoneProps } from "./types"

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
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        useEffect(() => {
            setSelectedCountry(
                countries.filter(
                    country =>
                        country.code.toLowerCase() ===
                        defaultCountry.toLowerCase()
                )[0]
            )
        }, [defaultCountry, setSelectedCountry])

        const [isOpen, setIsOpen] = useState(false)

        const listRef = useRef<HTMLDivElement>(null)
        const onClickOutside = () => setIsOpen(false)
        useClickOutside(listRef, onClickOutside)

        const [search, setSearch] = useState("")
        const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)

        const results = countries.filter(
            country =>
                country.name.toLowerCase().includes(search.toLowerCase()) ||
                country.dial_code.includes(search.toLowerCase()) ||
                country.code.toLowerCase().includes(search.toLowerCase())
        )

        const selectCountry = (value: InputPhoneCountryType) => {
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
