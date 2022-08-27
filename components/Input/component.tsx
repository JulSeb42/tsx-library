/*=============================================== Input ===============================================*/

import React, { useState, forwardRef } from "react"

import InputContainer from "../InputContainer"
import Icon from "../Icon"
import Variables from "../../Variables"

import CheckCircleIcon from "../../icons/CheckCircleIcon"
import ChevronDownIcon from "../../icons/ChevronDownIcon"
import CloseCircleIcon from "../../icons/CloseCircleIcon"
import CloseIcon from "../../icons/CloseIcon"

import * as Styles from "./styles"
import { InputProps } from "./types"

const InputFunction = forwardRef(
    (
        {
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
            options,
            ...props
        }: InputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const [isVisible, setIsVisible] = useState(false)

        const inputBase = (as?: any) => (
            <Styles.InputStyled
                maxLength={maxLength}
                value={value}
                id={id}
                type={
                    type === "select" || type === "textarea"
                        ? undefined
                        : password
                        ? isVisible
                            ? "text"
                            : "password"
                        : type
                }
                $type={type}
                disabled={disabled}
                name={name}
                $validation={validation?.status}
                as={as}
                autoFocus={autoFocus}
                $icon={!!icons?.icon}
                $showHttp={options?.showHttp}
                ref={ref}
                {...props}
            >
                {children}
            </Styles.InputStyled>
        )

        return type === "select" ? (
            <Styles.InputContent>
                {inputBase("select")}

                <Styles.RightContainer $disabled={disabled}>
                    {icons?.select ? (
                        <Icon
                            src={icons.select}
                            size={24}
                            color={disabled ? "gray" : "primary"}
                        />
                    ) : (
                        <ChevronDownIcon
                            size={24}
                            color={
                                disabled
                                    ? Variables.Colors.Gray500
                                    : Variables.Colors.Primary500
                            }
                        />
                    )}
                </Styles.RightContainer>
            </Styles.InputContent>
        ) : type === "textarea" ? (
            inputBase("textarea")
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
            <Styles.InputContent>
                {icons?.icon && (
                    <Styles.IconContainer>
                        <Icon
                            src={icons.icon}
                            size={16}
                            color={disabled ? "gray" : "primary"}
                        />
                    </Styles.IconContainer>
                )}

                {type === "url" && options?.showHttp && (
                    <Styles.UrlContainer
                        $icon={!!icons?.icon}
                        $disabled={disabled}
                    >
                        http://
                    </Styles.UrlContainer>
                )}

                {inputBase()}

                {(validation ||
                    password ||
                    (type === "search" &&
                        typeof value === "string" &&
                        value.length > 0)) && (
                    <Styles.RightContainer $disabled={disabled}>
                        {password && (
                            <Styles.ButtonInput
                                type="button"
                                onClick={() => setIsVisible(!isVisible)}
                                disabled={disabled}
                            >
                                {isVisible ? (
                                    icons?.hidePassword ? (
                                        <Icon
                                            src={icons.hidePassword}
                                            size={24}
                                        />
                                    ) : (
                                        textsPassword?.hide || "Hide"
                                    )
                                ) : (
                                    !isVisible &&
                                    (icons?.showPassword ? (
                                        <Icon
                                            src={icons.showPassword}
                                            size={24}
                                        />
                                    ) : (
                                        textsPassword?.show || "Show"
                                    ))
                                )}
                            </Styles.ButtonInput>
                        )}

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

                        {type === "search" &&
                            clearSearch &&
                            typeof value === "string" &&
                            value.length > 0 && (
                                <Styles.ButtonInput
                                    type="button"
                                    onClick={clearSearch}
                                    disabled={disabled}
                                >
                                    {icons?.clear ? (
                                        <Icon src={icons.clear} size={24} />
                                    ) : (
                                        <CloseIcon
                                            size={24}
                                            color={Variables.Colors.Primary500}
                                        />
                                    )}
                                </Styles.ButtonInput>
                            )}
                    </Styles.RightContainer>
                )}
            </Styles.InputContent>
        ) : (
            inputBase()
        )
    }
)

const Input = forwardRef(
    (
        {
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
        }: InputProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const inputFunction = () => (
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
                ref={ref}
                {...props}
            >
                {children}
            </InputFunction>
        )

        return options?.label ||
            options?.helper ||
            options?.helperBottom ||
            options?.counter ? (
            <InputContainer
                id={id}
                label={options.label}
                helper={options.helper}
                helperBottom={options.helperBottom}
                counter={options.counter}
                value={value}
                maxLength={maxLength}
            >
                {inputFunction()}
            </InputContainer>
        ) : (
            inputFunction()
        )
    }
)

export default Input
