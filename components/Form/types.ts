/*=============================================== Form types ===============================================*/

import React from "react"

import { ColorsHoverTypes, SpacersTypes } from "../../types"

interface BaseFormProps extends React.HTMLAttributes<HTMLFormElement> {
    buttonPrimary?:
        | string
        | {
              text: string
              iconLeft?: string
              iconRight?: string
          }
    accentColor?: ColorsHoverTypes
    isLoading?: boolean
    disabled?: boolean
    gap?: SpacersTypes
}

interface ButtonSecondary1 extends BaseFormProps {
    buttonSecondary?: {
        text?: "prev" | string | undefined
        iconLeft?: string
        iconRight?: string
        to: string | undefined
        onClick?: never
    }
}

interface ButtonSecondary2 extends BaseFormProps {
    buttonSecondary?: {
        text?: string | undefined
        iconLeft?: string
        iconRight?: string
        to?: never
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
    }
}

export type FormProps = ButtonSecondary1 | ButtonSecondary2
