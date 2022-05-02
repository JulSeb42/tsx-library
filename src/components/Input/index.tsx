// Packages
import React, { useState } from "react"
import MDEditor from "@uiw/react-md-editor"

// Components
import Variables from "../Variables"
import InputContainer from "../InputContainer"
import Icon from "../Icon"

// Types
import { inputFunctionProps, inputProps } from "./types"

// Styles
import {
    Container,
    InputStyled,
    IconContainer,
    RightContainer,
    ButtonPassword,
    SelectContainer,
} from "./styles"

const InputFunction: React.FC<inputFunctionProps> = ({
    icon,
    validation,
    value,
    colorMode = "light",
    onChange,
    preview = "edit",
    password,
    disabled,
    maxLength,
    type = "text",
    customIconPassed,
    customIconNotPassed,
    iconPassword,
    id,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const visible = isVisible ? "text" : "password"

    return icon || password || validation ? (
        <Container>
            {icon && (
                <IconContainer disabled={disabled}>
                    <Icon src={icon} size={16} />
                </IconContainer>
            )}

            <InputStyled
                id={id}
                value={value}
                type={password ? visible : type}
                onChange={onChange}
                icon={icon}
                maxLength={maxLength}
                validation={validation}
                disabled={disabled}
                {...props}
            />

            {(validation || password) && (
                <RightContainer>
                    {validation &&
                        value.length > 0 &&
                        (validation === "passed" ? (
                            customIconPassed ? (
                                <Icon
                                    src={customIconPassed}
                                    color={Variables.Colors.Success500}
                                    size={16}
                                />
                            ) : (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.13333 7.528L6.666 9.058L10.1953 5.52867L11.138 6.47133L6.66733 10.942L4.192 8.472L5.13333 7.528Z"
                                        fill={Variables.Colors.Success500}
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.33334 8C1.33334 4.324 4.324 1.33334 8 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8C14.6667 11.676 11.676 14.6667 8 14.6667C4.324 14.6667 1.33334 11.676 1.33334 8ZM2.66667 8C2.66667 10.9407 5.05934 13.3333 8 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8C13.3333 5.05934 10.9407 2.66667 8 2.66667C5.05934 2.66667 2.66667 5.05934 2.66667 8Z"
                                        fill={Variables.Colors.Success500}
                                    />
                                </svg>
                            )
                        ) : customIconNotPassed ? (
                            <Icon
                                src={customIconNotPassed}
                                color={Variables.Colors.Danger500}
                                size={16}
                            />
                        ) : (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.88532 10.828L7.99999 8.94267L6.11466 10.828L5.17199 9.88534L7.05733 8L5.17199 6.11467L6.11466 5.172L7.99999 7.05734L9.88532 5.172L10.828 6.11467L8.94266 8L10.828 9.88534L9.88532 10.828Z"
                                    fill={Variables.Colors.Danger500}
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.6667 8C14.6667 11.676 11.676 14.6667 7.99999 14.6667C4.32399 14.6667 1.33333 11.676 1.33333 8C1.33333 4.324 4.32399 1.33334 7.99999 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8ZM13.3333 8C13.3333 5.05934 10.9407 2.66667 7.99999 2.66667C5.05933 2.66667 2.66666 5.05934 2.66666 8C2.66666 10.9407 5.05933 13.3333 7.99999 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8Z"
                                    fill={Variables.Colors.Danger500}
                                />
                            </svg>
                        ))}

                    {password && (
                        <ButtonPassword
                            onClick={() => setIsVisible(!isVisible)}
                            type="button"
                        >
                            {iconPassword ? (
                                isVisible ? (
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 10C12 11.095 12.905 12 14 12C14.354 12 14.683 11.897 14.973 11.732C14.9758 11.7675 14.9805 11.8023 14.9853 11.8372C14.9927 11.8907 15 11.9443 15 12C15 13.642 13.641 15 12 15C10.358 15 9 13.642 9 12C9.00524 11.206 9.323 10.4459 9.88447 9.88447C10.4459 9.323 11.206 9.00524 12 9C12.0557 9 12.1093 9.00734 12.1628 9.01468C12.1977 9.01946 12.2325 9.02424 12.268 9.027C12.103 9.317 12 9.646 12 10Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.05204 11.684C2.07305 11.617 4.36704 5 12 5C19.633 5 21.927 11.617 21.949 11.684L22.054 12L21.948 12.316C21.927 12.383 19.633 19 12 19C4.36704 19 2.07305 12.383 2.05104 12.316L1.94604 12L2.05204 11.684ZM4.07404 12C4.57604 13.154 6.64904 17 12 17C17.348 17 19.422 13.158 19.926 12C19.424 10.846 17.351 7 12 7C6.65204 7 4.57804 10.842 4.07404 12Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 19C12.946 19 13.81 18.897 14.598 18.719L12.841 16.962C12.568 16.983 12.291 17 12 17C6.64898 17 4.57598 13.154 4.07398 12C4.45093 11.1588 4.96003 10.3833 5.58198 9.70297L4.18398 8.30497C2.64598 9.97197 2.06298 11.651 2.05198 11.684C1.983 11.8893 1.983 12.1116 2.05198 12.317C2.07298 12.383 4.36698 19 12 19ZM12 4.99997C10.163 4.99997 8.65398 5.39597 7.39598 5.98097L3.70698 2.29297L2.29298 3.70697L20.293 21.707L21.707 20.293L18.388 16.974C21.002 15.023 21.935 12.359 21.949 12.317C22.018 12.1116 22.018 11.8893 21.949 11.684C21.927 11.617 19.633 4.99997 12 4.99997ZM16.972 15.558L14.692 13.278C14.882 12.888 15 12.459 15 12C15 10.359 13.641 8.99997 12 8.99997C11.541 8.99997 11.112 9.11797 10.723 9.30897L8.91498 7.50097C9.9075 7.16038 10.9507 6.99097 12 6.99997C17.351 6.99997 19.424 10.846 19.926 12C19.624 12.692 18.76 14.342 16.972 15.558Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                )
                            ) : isVisible ? (
                                "Hide"
                            ) : (
                                "Show"
                            )}
                        </ButtonPassword>
                    )}
                </RightContainer>
            )}
        </Container>
    ) : type === "textarea" ? (
        <InputStyled
            as="textarea"
            id={id}
            value={value}
            type="textarea"
            onChange={onChange}
            icon={icon}
            maxLength={maxLength}
            validation={validation}
            disabled={disabled}
            {...props}
        />
    ) : type === "select" ? (
        <SelectContainer disabled={disabled}>
            <InputStyled
                as="select"
                id={id}
                value={value}
                type="select"
                onChange={onChange}
                icon={icon}
                maxLength={maxLength}
                validation={validation}
                disabled={disabled}
                {...props}
            >
                {props.children}
            </InputStyled>
        </SelectContainer>
    ) : type === "markdown" ? (
        <div data-color-mode={colorMode}>
            <MDEditor
                value={value}
                onChange={onChange}
                preview={preview}
                id={id}
                {...props}
            />
        </div>
    ) : (
        <InputStyled
            id={id}
            value={value}
            type={password ? visible : type}
            onChange={onChange}
            icon={icon}
            maxLength={maxLength}
            validation={validation}
            disabled={disabled}
            {...props}
        />
    )
}

const Input: React.FC<inputProps> = ({
    label,
    id,
    helper,
    helperBottom,
    validation,
    validationText,
    counter,
    maxLength,
    value,
    onChange,
    password,
    icon,
    colorMode,
    preview,
    disabled,
    customIconPassed,
    customIconNotPassed,
    iconPassword,
    type,
    ...props
}) => {
    return label ||
        helper ||
        helperBottom ||
        validation ||
        validationText ||
        counter ? (
        <InputContainer
            id={id}
            maxLength={maxLength}
            value={value}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            validation={validation}
            validationText={validationText}
            counter={counter}
        >
            <InputFunction
                onChange={onChange}
                value={value}
                validation={validation}
                password={password}
                icon={icon}
                colorMode={colorMode}
                preview={preview}
                disabled={disabled}
                maxLength={maxLength}
                type={type}
                customIconPassed={customIconPassed}
                customIconNotPassed={customIconNotPassed}
                iconPassword={iconPassword}
                id={id}
                {...props}
            />
        </InputContainer>
    ) : (
        <InputFunction
            onChange={onChange}
            value={value}
            validation={validation}
            password={password}
            icon={icon}
            colorMode={colorMode}
            preview={preview}
            disabled={disabled}
            maxLength={maxLength}
            type={type}
            customIconPassed={customIconPassed}
            customIconNotPassed={customIconNotPassed}
            iconPassword={iconPassword}
            id={id}
            {...props}
        />
    )
}

export default Input
