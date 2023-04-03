/*=============================================== Form types ===============================================*/

import type { HTMLAttributes } from "react"

import type { ColorsHoverTypes, SpacersTypes } from "../../types"

interface BaseFormProps extends HTMLAttributes<HTMLFormElement> {
    buttonPrimary?:
        | string
        | {
              text: string
              iconLeft?: string | JSX.Element
              iconRight?: string | JSX.Element
          }
    accentColor?: ColorsHoverTypes
    isLoading?: boolean
    disabled?: boolean
    gap?: SpacersTypes
    maxWidth?: string | number
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
        onClick: () => void | undefined
    }
}

export type FormProps = ButtonSecondary1 | ButtonSecondary2
