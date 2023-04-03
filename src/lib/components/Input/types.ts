/*=============================================== Input types ===============================================*/

import type {
    InputHTMLAttributes,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react"

import type {
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
    IconInputProps,
} from "../InputComponents/types"
import type { ExtendedInputContainerProps } from "../InputContainer/types"

enum inputTypes {
    color,
    date,
    "datetime-local",
    email,
    file,
    month,
    number,
    password,
    search,
    tel,
    text,
    time,
    url,
    week,
    textarea,
    select,
}

export type InputTypesType = keyof typeof inputTypes

interface InputPropsBase extends ExtendedInputContainerProps {
    backgroundColor?: InputBackgroundTypes
    variant?: InputVariantTypes
}

export interface TextInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "email" | "number" | "password" | "tel" | "text" | "url" | undefined
}

export interface ColorInputProps
    extends InputPropsBase,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "color"
}

export interface DateInputProps
    extends InputPropsBase,
        IconInputProps,
        ValidationComponentProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "date" | "datetime-local" | "month" | "week"
    iconCalendar?: string | JSX.Element
}

export interface FileInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "file"
}

interface BasePasswordProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: never
    password?: boolean
}

interface InputPasswordButtonProps1 extends BasePasswordProps {
    button?: {
        textShow?: string
        textHide?: string
        iconShow?: never
        iconHide?: never
    }
}

interface InputPasswordButtonProps2 extends BasePasswordProps {
    button?: {
        textShow?: never
        textHide?: never
        iconShow?: string | JSX.Element
        iconHide?: string | JSX.Element
    }
}

export type PasswordInputProps =
    | InputPasswordButtonProps1
    | InputPasswordButtonProps2

export interface SearchInputProps
    extends InputPropsBase,
        IconInputProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "search"
    clearSearch: () => void
    iconClear?: string | JSX.Element
}

export interface SelectInputProps
    extends InputPropsBase,
        SelectHTMLAttributes<HTMLSelectElement> {
    type?: "select"
    iconSelect?: string | JSX.Element
}

export interface TextareaProps
    extends InputPropsBase,
        ValidationComponentProps,
        TextareaHTMLAttributes<HTMLTextAreaElement> {
    type?: "textarea"
}

export interface TimeInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "time"
    iconClock?: string | JSX.Element
}

export interface UrlInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        InputHTMLAttributes<HTMLInputElement> {
    type?: "url"
    showHttp?: boolean
}

export type InputProps =
    | TextInputProps
    | ColorInputProps
    | DateInputProps
    | FileInputProps
    | PasswordInputProps
    | SearchInputProps
    | SelectInputProps
    | TextareaProps
    | TimeInputProps
    | UrlInputProps
