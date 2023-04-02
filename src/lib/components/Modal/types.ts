/*=============================================== Modal types ===============================================*/

import type { HTMLAttributes, ElementType, MouseEvent } from "react"

import type { ColorsHoverTypes } from "../../types"
import type { ButtonIconVariantTypes } from "../ButtonIcon/types"

interface ModalPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    disableEsc?: boolean
}

interface ModalPropsBehaviour1 extends ModalPropsBase {
    close?: undefined
    iconClose?: never
    labelClose?: never
    colorClose?: never
    variantClose?: never
}

interface ModalPropsBehaviour2 extends ModalPropsBase {
    close?: (e: MouseEvent<HTMLButtonElement>) => void
    iconClose?: string
    labelClose?: string
    colorClose?: ColorsHoverTypes
    variantClose?: ButtonIconVariantTypes
}

export type ModalProps = ModalPropsBehaviour1 | ModalPropsBehaviour2
