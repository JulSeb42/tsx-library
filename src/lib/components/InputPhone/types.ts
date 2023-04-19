/*=============================================== InputPhone types ===============================================*/

import type { InputHTMLAttributes } from "react"

import type { InputPhoneCountryType } from "../../types"
import type { CountryCodesTypes } from "../../utils/countries"
import type {
    InputBackgroundTypes,
    InputVariantTypes,
    ValidationComponentProps,
} from "../InputComponents/types"
import type { InputBaseProps } from "../InputContainer/types"
import type { ListDirectionTypes } from "../ListInputs/types"

export interface InputPhoneProps
    extends InputHTMLAttributes<HTMLInputElement>,
        InputBaseProps,
        ValidationComponentProps {
    backgroundColor?: InputBackgroundTypes
    defaultCountry?: CountryCodesTypes
    selectedCountry: InputPhoneCountryType | undefined
    setSelectedCountry: (
        country: InputPhoneCountryType | undefined | any
    ) => void
    searchIcon?: string
    searchPlaceholder?: string
    listDirection?: ListDirectionTypes
    variant?: InputVariantTypes
    textEmpty?: string
    type?: never
}
