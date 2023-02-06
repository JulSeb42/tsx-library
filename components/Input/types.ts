/*=============================================== Input types ===============================================*/

import React from "react"

import {
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
    IconInputProps,
} from "../InputComponents/types"
import { ExtendedInputContainerProps } from "../InputContainer/types"

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
        React.InputHTMLAttributes<HTMLInputElement> {
    type?: "email" | "number" | "password" | "tel" | "text" | "url" | undefined
}

export interface ColorInputProps
    extends InputPropsBase,
        React.InputHTMLAttributes<HTMLInputElement> {
    type?: "color"
}

export interface DateInputProps
    extends InputPropsBase,
        IconInputProps,
        ValidationComponentProps,
        React.InputHTMLAttributes<HTMLInputElement> {
    type?: "date" | "datetime-local" | "month" | "week"
    iconCalendar?: string
}

export interface FileInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        React.InputHTMLAttributes<HTMLInputElement> {
    type?: "file"
}

interface BasePasswordProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        React.InputHTMLAttributes<HTMLInputElement> {
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
        iconShow?: string
        iconHide?: string
    }
}

export type PasswordInputProps =
    | InputPasswordButtonProps1
    | InputPasswordButtonProps2

export interface SearchInputProps
    extends InputPropsBase,
        IconInputProps,
        React.InputHTMLAttributes<HTMLInputElement> {
    type?: "search"
    clearSearch: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClear?: string
}

export interface SelectInputProps
    extends InputPropsBase,
        React.SelectHTMLAttributes<HTMLSelectElement> {
    type?: "select"
    iconSelect?: string
}

export interface TextareaProps
    extends InputPropsBase,
        ValidationComponentProps,
        React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    type?: "textarea"
}

export interface TimeInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        React.InputHTMLAttributes<HTMLInputElement> {
    type?: "time"
    iconClock?: string
}

export interface UrlInputProps
    extends InputPropsBase,
        ValidationComponentProps,
        IconInputProps,
        React.InputHTMLAttributes<HTMLInputElement> {
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
