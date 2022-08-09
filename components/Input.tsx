/*=============================================== Input ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"

import InputContainer from "./InputContainer"
import Icon from "./Icon"
import Variables from "./Variables"
import Mixins from "./Mixins"

import CheckCircleIcon from "../icons/CheckCircleIcon"
import ChevronDownIcon from "../icons/ChevronDownIcon"
import CloseCircleIcon from "../icons/CloseCircleIcon"
import CloseIcon from "../icons/CloseIcon"

import { ValidationTypes } from "./common-types"

/*==================== Component ====================*/

const InputFunction = ({
    id,
    value,
    name,
    disabled,
    autoFocus,
    type,
    password,
    textsPassword,
    maxLength,
    icons,
    clearSearch,
    validation,
    children,
    ...props
}: Props) => {
    const [isVisible, setIsVisible] = useState(false)

    return type === "select" ? (
        <InputContent>
            <InputStyled
                maxLength={maxLength}
                value={value}
                id={id}
                type={type}
                disabled={disabled}
                name={name}
                $validation={validation?.status}
                as="select"
                autoFocus={autoFocus}
                {...props}
            >
                {children}
            </InputStyled>

            <RightContainer $disabled={disabled}>
                {icons?.select ? (
                    <Icon src={icons.select} size={24} color={disabled ? "gray" : "primary"} />
                ) : (
                    <ChevronDownIcon
                        size={24}
                        color={disabled ? Variables.Colors.Gray500 : Variables.Colors.Primary500}
                    />
                )}
            </RightContainer>
        </InputContent>
    ) : type === "textarea" ? (
        <InputStyled
            as="textarea"
            maxLength={maxLength}
            value={value}
            id={id}
            type={type}
            disabled={disabled}
            name={name}
            $validation={validation?.status}
            autoFocus={autoFocus}
            {...props}
        />
    ) : icons?.icon ||
      validation ||
      password ||
      type === "url" ||
      type === "search" ||
      type === "date" ||
      type === "datetime-local" ||
      type === "month" ||
      type === "week" ||
      type === "time" ? (
        <InputContent>
            {icons?.icon && (
                <IconContainer>
                    <Icon src={icons.icon} size={16} color={disabled ? "gray" : "primary"} />
                </IconContainer>
            )}

            {type === "url" && (
                <UrlContainer $icon={!!icons?.icon} $disabled={disabled}>
                    http://
                </UrlContainer>
            )}

            <InputStyled
                maxLength={maxLength}
                value={value}
                id={id}
                type={password ? (isVisible ? "text" : "password") : type}
                disabled={disabled}
                name={name}
                $validation={validation?.status}
                $icon={!!icons?.icon}
                autoFocus={autoFocus}
                {...props}
            />

            {(validation || password || (type === "search" && typeof value === "string" && value.length > 0)) && (
                <RightContainer $disabled={disabled}>
                    {password && (
                        <ButtonInput type="button" onClick={() => setIsVisible(!isVisible)} disabled={disabled}>
                            {isVisible ? (
                                icons?.hidePassword ? (
                                    <Icon src={icons.hidePassword} size={24} />
                                ) : (
                                    textsPassword?.hide || "Hide"
                                )
                            ) : (
                                !isVisible &&
                                (icons?.showPassword ? (
                                    <Icon src={icons.showPassword} size={24} />
                                ) : (
                                    textsPassword?.show || "Show"
                                ))
                            )}
                        </ButtonInput>
                    )}

                    {validation &&
                        (validation.status === "passed" ? (
                            validation.iconPassed ? (
                                <Icon src={validation.iconPassed} size={24} color="success" />
                            ) : (
                                <CheckCircleIcon size={24} color={Variables.Colors.Success500} />
                            )
                        ) : validation.iconNotPassed ? (
                            <Icon src={validation.iconNotPassed} size={24} color="danger" />
                        ) : (
                            <CloseCircleIcon size={24} color={Variables.Colors.Danger500} />
                        ))}

                    {type === "search" && clearSearch && typeof value === "string" && value.length > 0 && (
                        <ButtonInput type="button" onClick={clearSearch} disabled={disabled}>
                            {icons?.clear ? (
                                <Icon src={icons.clear} size={24} />
                            ) : (
                                <CloseIcon size={24} color={Variables.Colors.Primary500} />
                            )}
                        </ButtonInput>
                    )}
                </RightContainer>
            )}
        </InputContent>
    ) : (
        <InputStyled
            maxLength={maxLength}
            value={value}
            id={id}
            type={type}
            disabled={disabled}
            name={name}
            autoFocus={autoFocus}
            {...props}
        />
    )
}

const Input = ({
    id,
    value,
    name,
    disabled,
    autoFocus,
    type = undefined,
    password,
    textsPassword,
    maxLength,
    icons,
    clearSearch,
    options,
    validation,
    children,
    ...props
}: Props) =>
    options?.label || options?.helper || options?.helperBottom || options?.counter ? (
        <InputContainer
            id={id}
            label={options.label}
            helper={options.helper}
            helperBottom={options.helperBottom}
            counter={options.counter}
            value={value}
            maxLength={maxLength}
        >
            <InputFunction
                id={id}
                validation={validation}
                type={type}
                disabled={disabled}
                name={name}
                icons={icons}
                value={value}
                maxLength={maxLength}
                clearSearch={clearSearch}
                password={password}
                textsPassword={textsPassword}
                autoFocus={autoFocus}
                {...props}
            >
                {children}
            </InputFunction>
        </InputContainer>
    ) : (
        <InputFunction
            id={id}
            validation={validation}
            type={type}
            disabled={disabled}
            name={name}
            icons={icons}
            value={value}
            maxLength={maxLength}
            clearSearch={clearSearch}
            password={password}
            textsPassword={textsPassword}
            autoFocus={autoFocus}
            {...props}
        >
            {children}
        </InputFunction>
    )

export default Input

/*==================== Types ====================*/

const inputTypes = {
    color: "color",
    date: "date",
    "datetime-local": "datetime-local",
    email: "email",
    file: "file",
    month: "month",
    number: "number",
    password: "password",
    search: "search",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    textarea: "textarea",
    select: "select",
} as const

type InputTypesTypes = keyof typeof inputTypes

interface StyleProps extends React.HTMLAttributes<HTMLInputElement> {
    $validation?: ValidationTypes | string
    $iconCalendar?: string
    $iconClock?: string
    $iconSelect?: string
    type?: InputTypesTypes
    $icon?: boolean
}

interface UrlProps {
    $icon?: boolean
    $disabled?: boolean
}

interface RightContainerProps {
    $disabled?: boolean
}

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    value?: any
    name?: string
    disabled?: boolean
    as?: any
    autoFocus?: boolean

    type?: InputTypesTypes | undefined
    password?: boolean

    textsPassword?: {
        hide?: string
        show?: string
    }

    children?: any
    maxLength?: number

    icons?: {
        icon?: string
        calendar?: string
        clock?: string
        showPassword?: string
        hidePassword?: string
        clear?: string
        select?: string
    }

    clearSearch?: (event: React.MouseEvent<HTMLButtonElement>) => void

    validation?: {
        status: ValidationTypes | undefined
        iconPassed?: string
        iconNotPassed?: string
    }

    options?: {
        label?: string
        helper?: string
        helperBottom?: string
        counter?: boolean
    }
}

/*==================== Styles ====================*/

const size = 32

const InputStyled = styled.input<StyleProps>`
    width: 100%;
    height: ${size}px;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: ${Variables.Spacers.XS};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed" ? Variables.Colors.Danger50 : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: 0;

    &:focus {
        border-color: ${({ $validation }) =>
            $validation && $validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500};
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

    ${({ $icon }) =>
        $icon &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}

    ${({ type }) =>
        type === "color" || type === "file"
            ? css`
                  cursor: pointer;
              `
            : type === "search" &&
              css`
                  &::-webkit-search-cancel-button {
                      -webkit-appearance: none;
                      appearance: none;
                  }
              `}

    ${({ type }) =>
        type === "file" &&
        css`
            padding: 0;

            &::file-selector-button {
                height: 100%;
                background-color: ${Variables.Colors.Gray100};
                border: none;
                height: 100%;
                padding: 0 ${Variables.Spacers.XS};
                line-height: 100%;
                transition: ${Variables.Transitions.Short};
                cursor: pointer;
            }

            @media ${Variables.Breakpoints.Hover} {
                &:hover::file-selector-button {
                    background-color: ${Variables.Colors.Gray300};
                }

                &:disabled:hover::file-selector-button {
                    background-color: ${Variables.Colors.Gray100};
                    color: ${Variables.Colors.Gray500};
                    cursor: not-allowed;
                }
            }

            &:disabled::file-selector-button {
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${({ type, $icon }) =>
        type === "url" &&
        css`
            padding-left: ${$icon ? 53 + size : 53}px;
        `}

    ${({ type, $iconCalendar }) =>
        (type === "date" || type === "datetime-local" || type === "month" || type === "week") &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                ${$iconCalendar
                    ? Mixins.Icon({
                          $name: $iconCalendar,
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })
                    : Mixins.LibIcon({
                          $name: "calendar",
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })};
                cursor: pointer;
                transform: translateX(1px);
                transition: ${Variables.Transitions.Short};

                @media ${Variables.Breakpoints.Hover} {
                    &:hover {
                        background-color: ${Variables.Colors.Primary300};
                    }

                    &:active {
                        background-color: ${Variables.Colors.Primary600};
                    }
                }
            }
        `}

    ${({ type, $iconClock }) =>
        type === "time" &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                ${$iconClock
                    ? Mixins.Icon({
                          $name: $iconClock,
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })
                    : Mixins.LibIcon({
                          $name: "clock",
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })};
                cursor: pointer;
                transform: translateX(1px);
                transition: ${Variables.Transitions.Short};

                @media ${Variables.Breakpoints.Hover} {
                    &:hover {
                        background-color: ${Variables.Colors.Primary300};
                    }

                    &:active {
                        background-color: ${Variables.Colors.Primary600};
                    }
                }
            }
        `}

    ${({ type }) =>
        type === "select" &&
        css`
            padding: 0 ${Variables.Spacers.XS};
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}

    ${({ type }) =>
        type === "textarea" &&
        css`
            height: inherit;
            min-height: calc(
                ${Variables.FontSizes.Body} * ${Variables.LineHeights.Regular} * 4 + ${Variables.Spacers.XXS} * 2
            );
            resize: vertical;
        `}
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: ${size}px;
    height: ${size}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const UrlContainer = styled.span<UrlProps>`
    position: absolute;
    left: 0;
    top: 0;
    height: ${size}px;
    z-index: 2;
    line-height: ${size}px;
    padding-left: ${Variables.Spacers.XS};

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${Variables.Colors.Gray500};
            cursor: not-allowed;
        `}

    ${({ $icon }) =>
        $icon &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}
`

const InputContent = styled.span`
    position: relative;
    width: 100%;
`

const ButtonInput = styled.button`
    border: none;
    height: 100%;
    padding: 0;
    background-color: transparent;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`

const RightContainer = styled.span<RightContainerProps>`
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

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`
