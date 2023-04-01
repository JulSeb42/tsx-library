/*=============================================== InputPhone types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type {
    //  ShadowsTypes, InputPhoneCountryType
    ShadowsTypes,
    InputPhoneCountryType,
} from "../../types"
import type { InputBaseProps } from "../InputContainer/types"
import type {
    ValidationComponentProps,
    InputBackgroundTypes,
    InputVariantTypes,
} from "../InputComponents/types"
import type { CountryCodesTypes } from "../../utils/countries"
import type { ListDirectionTypes } from "../ListInputs/types"

interface InputPhonePropsBase
    extends InputHTMLAttributes<HTMLInputElement>,
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
