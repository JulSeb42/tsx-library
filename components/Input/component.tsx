/*=============================================== Input ===============================================*/

import React, { forwardRef } from "react"

import InputContainer from "../InputContainer"

import ColorInput from "./templates/ColorInput"
import DateInput from "./templates/DateInput"
import FileInput from "./templates/FileInput"
import PasswordInput from "./templates/PasswordInput"
import SearchInput from "./templates/SearchInput"
import SelectInput from "./templates/SelectInput"
import Textarea from "./templates/Textarea"
import TextInput from "./templates/TextInput"
import TimeInput from "./templates/TimeInput"
import UrlInput from "./templates/UrlInput"

import { InputProps, InputTypesTypes } from "./types"

const renderComponent = (
    props: any,
    type?: InputTypesTypes,
    ref?: React.ForwardedRef<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
) => {
    if (props.password) {
        return <PasswordInput ref={ref} {...props} />
    }

    switch (type) {
        case "color":
            return <ColorInput ref={ref} type={type} {...props} />
        case "date" || "datetime-local" || "month" || "week":
            return <DateInput ref={ref} type={type} {...props} />
        case "file":
            return <FileInput ref={ref} type={type} {...props} />
        case "search":
            return <SearchInput ref={ref} type={type} {...props} />
        case "select":
            return (
                <SelectInput ref={ref} type={type} {...props}>
                    {props.children}
                </SelectInput>
            )
        case "textarea":
            return <Textarea ref={ref} type={type} {...props} />
        case "time":
            return <TimeInput ref={ref} type={type} {...props} />
        case "url":
            return <UrlInput ref={ref} type={type} {...props} />
        default:
            return <TextInput ref={ref} type={type} {...props} />
    }
}

const InputFunction = forwardRef(
    (
        { type, ...props }: InputProps,
        ref?: React.ForwardedRef<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => renderComponent(props, type, ref)
)

const Input = forwardRef(
    (
        {
            label,
            helper,
            helperBottom,
            counter,
            maxLength,
            value,
            id,
            accentColor = "primary",
            ...props
        }: InputProps,
        ref?: React.ForwardedRef<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const inputFunction = () => (
            <InputFunction
                id={id}
                maxLength={maxLength}
                value={value}
                ref={ref}
                accentColor={accentColor}
                {...props}
            />
        )

        return label || helper || helperBottom || counter ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                counter={counter}
                maxLength={maxLength}
                value={value}
                accentColor={accentColor}
            >
                {inputFunction()}
            </InputContainer>
        ) : (
            inputFunction()
        )
    }
)

export default Input
