/*=============================================== Input types ===============================================*/

import React from "react"

import { ValidationTypes, ColorsHoverTypes } from "../../utils/common-types"
import { ExtendedInputContainerProps } from "../InputContainer/types"

/*==================== List possibilities ====================*/

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

export type InputTypesTypes = keyof typeof inputTypes

const backgroundTypes = {
    light: "light",
    dark: "dark",
} as const

export type InputBackgroundTypes = keyof typeof backgroundTypes

/*==================== Component Types ====================*/

interface BaseInputProps extends ExtendedInputContainerProps {
    value?: any
    name?: string
    disabled?: boolean
    autoFocus?: boolean
    accentColor?: ColorsHoverTypes
    backgroundColor?: InputBackgroundTypes
}

export interface ValidationProps {
    validation?: {
        status: ValidationTypes
        iconPassed?: string
        iconNotPassed?: string
    }
}

export interface IconInputProps {
    icon?: string
}

export interface TextInputProps
    extends BaseInputProps,
        ValidationProps,
        IconInputProps,
        React.HTMLAttributes<HTMLInputElement> {
    id: string
    type?: "email" | "number" | "password" | "tel" | "text" | undefined

    children?: never
    maxLength?: number
    counter?: boolean
}

export interface ColorInputProps
    extends BaseInputProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: "color"
    id: string
    children?: never
    showColor?: boolean
}

export interface DateInputProps
    extends BaseInputProps,
        IconInputProps,
        ValidationProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: "date" | "datetime-local" | "month" | "week"
    children?: never
    id: string
    iconCalendar?: string
}

export interface FileInputProps
    extends BaseInputProps,
        ValidationProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: "file"
    id: string
    children?: never
}

interface BasePasswordProps
    extends BaseInputProps,
        ValidationProps,
        IconInputProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: never
    password?: boolean
    id: string
    children?: never
}

interface PossiblePasswordProps1 extends BasePasswordProps {
    button?: {
        color?: ColorsHoverTypes
        textShow?: string
        textHide?: string
        iconShow?: never
        iconHide?: never
    }
}

interface PossiblePasswordProps2 extends BasePasswordProps {
    button?: {
        color?: ColorsHoverTypes
        textShow?: never
        textHide?: never
        iconShow?: string
        iconHide?: string
    }
}

export type PasswordInputProps = PossiblePasswordProps1 | PossiblePasswordProps2

export interface SearchInputProps
    extends BaseInputProps,
        ValidationProps,
        IconInputProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: "search"
    children?: never
    id: string
    clearSearch: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClear?: string
    validation?: never
}

export interface SelectInputProps
    extends BaseInputProps,
        React.HTMLAttributes<HTMLSelectElement> {
    type?: "select"
    id: string
    children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
    iconSelect?: string
}

export interface TextareaProps
    extends BaseInputProps,
        ValidationProps,
        React.HTMLAttributes<HTMLTextAreaElement> {
    id: string
    children?: never
    type?: "textarea"
}

export interface TimeInputProps
    extends BaseInputProps,
        ValidationProps,
        IconInputProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: "time"
    id: string
    children?: never
    iconClock?: string
}

export interface UrlInputProps
    extends BaseInputProps,
        ValidationProps,
        IconInputProps,
        React.HTMLAttributes<HTMLInputElement> {
    type?: "url"
    id: string
    children?: never
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
