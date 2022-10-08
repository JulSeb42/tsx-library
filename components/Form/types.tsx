/*=============================================== Form types ===============================================*/

import React from "react"

import { ColorsHoverTypes } from "../../utils/common-types"

interface BaseProps extends React.HTMLAttributes<HTMLFormElement> {
    buttonPrimary?:
        | string
        | {
              text: string
              iconLeft?: string
              iconRight?: string
          }
    accentColor?: ColorsHoverTypes
    isLoading?: boolean
}

interface Possible1 extends BaseProps {
    buttonSecondary?: {
        text?: string
        iconLeft?: string
        iconRight?: string
        to: string
        onClick?: never
    }
}

interface Possible2 extends BaseProps {
    buttonSecondary?: {
        text?: string
        iconLeft?: string
        iconRight?: string
        to?: never
        onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    }
}

export type FormProps = Possible1 | Possible2
