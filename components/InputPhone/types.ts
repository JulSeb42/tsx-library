/*=============================================== InputPhone types ===============================================*/

import React from "react"

import { ShadowsTypes, InputPhoneCountryType } from "../../types"
import { InputBaseProps } from "../InputContainer/types"
import {
    ValidationComponentProps,
    InputBackgroundTypes,
    InputVariantTypes,
    
} from "../InputComponents/types"
import { CountryCodesTypes } from "../../utils/countries"
import { ListDirectionTypes } from "../ListInputs/types"

interface InputPhonePropsBase
    extends React.InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps,
        ValidationComponentProps {
    backgroundColor?: InputBackgroundTypes
    defaultCountry?: CountryCodesTypes
    selectedCountry: InputPhoneCountryType | undefined
    setSelectedCountry: (
        country: InputPhoneCountryType | undefined | any
    ) => void
    hasSearch?: boolean
    searchIcon?: string
    iconButton?: string
    searchPlaceholder?: string
    listDirection?: ListDirectionTypes
    variant?: InputVariantTypes
    textEmpty?: string
    type?: never
}

interface InputPhoneList1 extends InputPhonePropsBase {
    listVariant?: "bordered"
    listShadow?: never
}

interface InputPhoneList2 extends InputPhonePropsBase {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type InputPhoneProps = InputPhoneList1 | InputPhoneList2
