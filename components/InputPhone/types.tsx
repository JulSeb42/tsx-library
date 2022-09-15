/*=============================================== InputPhone types ===============================================*/

import React from "react"

import { ShadowsTypes } from "../../utils/common-types"

import { InputContainerProps } from "../InputContainer/types"
import { ValidationProps } from "../Input/types"
import { InputBackgroundTypes, InputsVariantsTypes } from "../Input/types"
import { ListDirectionTypes } from "../ListInputs/types"

export type CountryType = {
    name: string
    dial_code: string
    code: string
    flag: string
}

interface BaseProps
    extends React.HTMLAttributes<HTMLInputElement>,
        InputContainerProps,
        ValidationProps {
    id: string
    children?: never
    disabled?: boolean
    backgroundColor?: InputBackgroundTypes
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    defaultCountry?: string
    selectedCountry: CountryType | undefined
    setSelectedCountry: (country: CountryType | undefined | any) => void
    hasSearch?: boolean
    iconButton?: string
    searchPlaceholder?: string
    listDirection?: ListDirectionTypes
    variant?: InputsVariantsTypes
}

interface PossibleList1 extends BaseProps {
    listVariant?: "bordered"
    listShadow?: never
}

interface PossibleList2 extends BaseProps {
    listVariant?: "shadow"
    listShadow?: ShadowsTypes
}

export type InputPhoneProps = PossibleList1 | PossibleList2
