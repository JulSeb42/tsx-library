/*=============================================== InputPhone ===============================================*/

/*==================== Imports ====================*/

import React, { useRef } from "react"
import styled, { css } from "styled-components"

import InputContainer from "./InputContainer"
import Icon from "./Icon"
import CaretDownIcon from "../icons/CaretDownIcon"
import CheckCircleIcon from "../icons/CheckCircleIcon"
import CloseCircleIcon from "../icons/CloseCircleIcon"
import SearchIcon from "../icons/SearchIcon"
import Mixins from "./Mixins"
import Variables from "../Variables"
import useClickOutside from "../hooks/useClickOutside"

import {
    CountryType,
    ValidationTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../common-types"

/*==================== Component ====================*/

const InputPhone = ({
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
}: Props) => {
    const ref = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(ref, onClickOutside)

    const inputContent = () => (
        <StyledInputPhone $isOpen={isOpen}>
            <Button type="button" onClick={() => setIsOpen(!isOpen)}>
                <Flag
                    src={selectedCountry.flag}
                    alt={`Flag ${selectedCountry.name}`}
                />

                {options?.iconButton ? (
                    <Icon src={options.iconButton} size={12} />
                ) : (
                    <CaretDownIcon size={12} />
                )}
            </Button>

            <List $isOpen={isOpen} ref={ref}>
                {search && (
                    <SearchContainer>
                        <StyledIconSearch size={16} color="primary" />

                        <InputSearch
                            placeholder={search.placeholder || "Search"}
                            onChange={search.handleSearch}
                            value={search.value}
                        />
                    </SearchContainer>
                )}

                {children}
            </List>

            <CountryCode>{selectedCountry.dial_code}</CountryCode>

            <Input
                $codeLength={selectedCountry.dial_code.length}
                id={id}
                value={input.value}
                onChange={input.onChange}
                type="tel"
                disabled={disabled}
                {...props}
            />

            {validation && (
                <RightContainer $disabled={disabled}>
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
                </RightContainer>
            )}
        </StyledInputPhone>
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

const InputPhoneItem = ({
    country,
    onClick,
    isActive,
    ...props
}: ItemProps) => {
    return (
        <Item $isActive={isActive} onClick={onClick} {...props}>
            <Flag src={country.flag} alt={`Flag ${country.name}`} />
            <span>
                ({country.dial_code}) {country.name}
            </span>
        </Item>
    )
}

export { InputPhone, InputPhoneItem }

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    selectedCountry: CountryType
    children: React.ReactNode | React.ReactNode[]
    disabled?: boolean
    id: string
    isOpen: boolean
    setIsOpen: any

    input: {
        value: string
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    }

    validation?: {
        status: ValidationTypes | undefined
        iconPassed?: string
        iconNotPassed?: string
    }

    search?: {
        value: string
        handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
        icon?: string
        placeholder?: string
    }

    options?: {
        iconButton?: string
        label?: string
        helper?: string
        helperBottom?:
            | string
            | {
                  text: string
                  icon?: string
                  iconColor?: LibColorsTypes | ColorsShortTypes | string
              }
    }
}

interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
    country: CountryType
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void
    isActive: boolean
}

/*==================== Styles ====================*/

const inputHeight = 32

const StyledInputPhone = styled.div<{ $isOpen: boolean }>`
    position: relative;
    width: 100%;
    z-index: ${({ $isOpen }) => ($isOpen ? 20 : 0)};
`

const Button = styled.button`
    height: ${inputHeight}px;
    padding: 0 ${Variables.Spacers.XS};
    border: none;
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};

    & > svg:first-of-type {
        width: 20px;
    }
`

const Flag = styled.img`
    width: 16px;
`

const List = styled.div<{ $isOpen?: boolean; ref?: any }>`
    width: 100%;
    position: absolute;
    left: 0;
    top: ${inputHeight}px;
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Shadows.M};
    z-index: 50;
    max-height: ${({ $isOpen }) => ($isOpen ? "200px" : 0)};
    overflow-y: scroll;
    transition: ${Variables.Transitions.Short};
    background-color: ${Variables.Colors.White};
`

const Item = styled.span<{ $isActive: boolean }>`
    padding: ${Variables.Spacers.XS};
    cursor: pointer;
    transition: ${Variables.Transitions.Short};
    background-color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.Primary500 : Variables.Colors.White};
    color: ${({ $isActive }) =>
        $isActive ? Variables.Colors.White : Variables.Colors.Black};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $gap: "xs",
    })};
    height: 40px;

    & > span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${Variables.Colors.Primary300};
            color: ${Variables.Colors.White};
        }

        &:active {
            background-color: ${Variables.Colors.Primary600};
        }
    }

    svg {
        width: 20px;
    }
`

const StyledIconSearch = styled(SearchIcon)`
    position: absolute;
    left: ${Variables.Spacers.XS};
    top: calc(50% - 16px / 2);
`

const SearchContainer = styled.div`
    padding: ${Variables.Spacers.XS};
    position: relative;
`

const InputSearch = styled.input`
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    width: 100%;
    height: 40px;
    padding: 0 ${Variables.Spacers.XS} 0 calc(16px + ${Variables.Spacers.XS});
    border: none;
    outline: none;
    border-bottom: 1px solid ${Variables.Colors.Gray200};
    border-radius: 0;
    transition: ${Variables.Transitions.Short};

    &:focus {
        border-bottom-color: ${Variables.Colors.Primary500};
    }
`

const CountryCode = styled.span`
    position: absolute;
    left: 48px;
    height: ${inputHeight}px;
    ${Mixins.Flexbox({
        $alignItems: "center",
    })};
    z-index: 1;
`

const Input = styled.input<{
    $validation?: ValidationTypes | string
    $codeLength: number
}>`
    position: relative;
    width: 100%;
    height: ${inputHeight}px;
    position: relative;
    z-index: 0;
    padding-right: ${Variables.Spacers.XS};
    padding-left: calc(
        48px +
            ${({ $codeLength }) =>
                $codeLength === 3
                    ? 28
                    : $codeLength === 4
                    ? 38
                    : $codeLength === 5
                    ? 47
                    : 19}px
    );
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed"
            ? Variables.Colors.Danger50
            : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;

    &:focus {
        border-color: ${({ $validation }) =>
            $validation && $validation === "not-passed"
                ? Variables.Colors.Danger500
                : Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${Variables.Colors.Gray50};
        color: ${Variables.Colors.Gray500};

        &::placeholder {
            color: ${Variables.Colors.Gray500};
        }
    }

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }
`

const RightContainer = styled.span<{ $disabled?: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    padding: 0 ${Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    gap: ${Variables.Spacers.XS};
    z-index: 10;

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`
