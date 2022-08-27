/*=============================================== InputPhone types ===============================================*/

import React from "react"

import {
    CountryType,
    ValidationTypes,
    LibColorsTypes,
    ColorsShortTypes,
} from "../../utils/common-types"

export interface InputPhoneProps
    extends React.HTMLAttributes<HTMLInputElement> {
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

export interface ItemProps extends React.HTMLAttributes<HTMLSpanElement> {
    country: CountryType
    onClick: (e: React.MouseEvent<HTMLSpanElement>) => void
    isActive: boolean
}
