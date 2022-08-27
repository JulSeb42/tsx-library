/*=============================================== Input types ===============================================*/

import React from "react"

import {
    ValidationTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

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

/*==================== Component Types ====================*/

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    value?: any
    name?: string
    disabled?: boolean
    as?: any
    autoFocus?: boolean
    ref?: any

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
        helperBottom?:
            | string
            | {
                  text: string
                  icon?: string
                  iconColor?: LibColorsTypes | ColorsShortTypes | string
              }
        counter?: boolean
        showHttp?: boolean
    }
}
