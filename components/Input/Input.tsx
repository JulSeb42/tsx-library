/*=============================================== Input component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { InputContainer } from "../InputContainer"

import ColorInput from "./templates/ColorInput"
import DateInput from "./templates/DateInput"
import FileInput from "./templates/FileInput"
import PasswordInput from "./templates/PasswordInput"
import SearchInput from "./templates/SearchInput"
import SelectInput from "./templates/SelectInput"
import Textarea from "./templates/Textarea"
import TextInput from "./templates/TextInput"
import TimeInput from "./templates/TimeInput"

import type { InputTypesType, InputProps } from "./types"

const renderComponent = (
    props: any,
    type?: InputTypesType,
    ref?: ForwardedRef<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
) => {
    if (props.password) {
        return <PasswordInput ref={ref} {...props} />
    }

    switch (type) {
        case "color":
            return <ColorInput type={type} ref={ref} {...props} />
        case "date":
        case "datetime-local":
        case "month":
        case "week":
            return <DateInput type={type} ref={ref} {...props} />
        case "file":
            return <FileInput type={type} ref={ref} {...props} />
        case "search":
            return <SearchInput type={type} ref={ref} {...props} />
        case "select":
            return (
                <SelectInput type={type} ref={ref} {...props}>
                    {props.children}
                </SelectInput>
            )
        case "textarea":
            return <Textarea type={type} ref={ref} {...props} />
        case "time":
            return <TimeInput type={type} ref={ref} {...props} />
        default:
            return <TextInput type={type} ref={ref} {...props} />
    }
}

const InputFunction = forwardRef(
    (
        { type, ...props }: InputProps,
        ref?: ForwardedRef<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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
            id,
            accentColor = "primary",
            value,
            ...rest
        }: InputProps,
        ref?: ForwardedRef<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const inputFn = () => (
            <InputFunction
                id={id}
                maxLength={maxLength}
                value={value}
                accentColor={accentColor}
                ref={ref}
                {...rest}
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
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default Input
