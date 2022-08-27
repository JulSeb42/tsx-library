/*=============================================== Form types ===============================================*/

import React from "react"

interface BaseProps extends React.HTMLAttributes<HTMLFormElement> {
    buttonPrimary?: {
        text: string
        iconLeft?: string
        iconRight?: string
    }
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
