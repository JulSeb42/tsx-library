/*=============================================== InputPhone component ===============================================*/

import React, { forwardRef, useEffect, useState, useRef } from "react"
import type { ForwardedRef, ChangeEvent } from "react"
import classNames from "classnames"

import { useClickOutside, uuid, Icon, stringifyPx } from "../../"
import { CaretDownIcon } from "../../icons"
import type { InputPhoneCountryType } from "../../types"
import { countries } from "../../utils/countries"
import { ListInputs, ListItem } from "../ListInputs"
import { RightContainer, ValidationComponent } from "../InputComponents"
import { InputContainer } from "../InputContainer"

import {
    StyledInputPhone,
    Button,
    Flag,
    StyledIconSearch,
    SearchContainer,
    InputSearch,
    CountryCode,
    Input,
} from "./styles"
import type { InputPhoneProps } from "./types"

const InputPhone = forwardRef(
    (
        {
            id,
            disabled,
            defaultCountry = "de",
            selectedCountry = undefined,
            setSelectedCountry,
            label,
            helper,
            helperBottom,
            validation,
            searchPlaceholder = "Search",
            backgroundColor,
            listDirection,
            variant,
            textEmpty = "Your search did not return any result.",
            searchIcon,
            className,
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
            getValidationStatus === "not-passed" ? "danger" : "primary"

        const iconColor =
            getValidationStatus === "not-passed" && isOpen
                ? "danger"
                : isOpen
                ? "primary"
                : "gray"

        const inputContent = () => (
            <StyledInputPhone
                ref={listRef}
                className={classNames(
                    { open: isOpen },
                    !label && !helper && !helperBottom && className,
                    "input-content"
                )}
            >
                <Button
                    type="button"
                    data-variant={variant}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Flag
                        src={selectedCountry && selectedCountry.flag}
                        alt={`Flag ${selectedCountry && selectedCountry.name}`}
                    />

                    <CaretDownIcon size={12} color={iconColor} />
                </Button>

                <ListInputs
                    isOpen={isOpen}
                    validation={getValidationStatus}
                    backgroundColor={backgroundColor}
                    direction={listDirection}
                >
                    <SearchContainer>
                        {searchIcon ? (
                            <Icon
                                src={searchIcon}
                                size={16}
                                color={searchIconColor}
                            />
                        ) : (
                            <StyledIconSearch
                                size={16}
                                color={searchIconColor}
                            />
                        )}

                        <InputSearch
                            placeholder={searchPlaceholder}
                            onChange={handleSearch}
                            value={search}
                            data-validation={validation}
                            data-background={backgroundColor}
                        />
                    </SearchContainer>

                    {results.length > 0 ? (
                        results.map(country => (
                            <ListItem
                                isActive={country === selectedCountry && true}
                                onClick={() => selectCountry(country)}
                                validation={getValidationStatus}
                                backgroundColor={backgroundColor}
                                key={uuid()}
                            >
                                <Flag
                                    src={country.flag}
                                    alt={`Flag ${country.name}`}
                                />
                                <span>
                                    ({country.dial_code}) {country.name}
                                </span>
                            </ListItem>
                        ))
                    ) : (
                        <ListItem readOnly>{textEmpty}</ListItem>
                    )}
                </ListInputs>

                <CountryCode data-background={backgroundColor}>
                    {selectedCountry && selectedCountry.dial_code}
                </CountryCode>

                <Input
                    ref={ref}
                    id={id}
                    type="tel"
                    disabled={disabled}
                    data-variant={variant}
                    data-background={backgroundColor}
                    data-type="tel"
                    data-validation={getValidationStatus}
                    className={classNames("input input-phone", {
                        "list-open": isOpen,
                    })}
                    style={{
                        ["--country-code-length" as any]: stringifyPx(
                            getCodeLength(
                                selectedCountry?.dial_code.length || 3
                            )
                        ),
                    }}
                    {...rest}
                />

                {validation && (
                    <RightContainer disabled={disabled} variant={variant}>
                        <ValidationComponent validation={validation} />
                    </RightContainer>
                )}
            </StyledInputPhone>
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                className={className}
            >
                {inputContent()}
            </InputContainer>
        ) : (
            inputContent()
        )
    }
)

const getCodeLength = (length: number) => {
    switch (length) {
        case 3:
            return 28
        case 4:
            return 38
        case 5:
            return 47
        default:
            return 19
    }
}

export default InputPhone
