/*=============================================== Modal types ===============================================*/

import React from "react"

interface ModalPropsBase extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    isOpen: boolean
}

interface ModalPropsBehaviour1 extends ModalPropsBase {
    close?: undefined
    iconClose?: never
    labelClose?: never
}

interface ModalPropsBehaviour2 extends ModalPropsBase {
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClose?: string
    labelClose?: string
}

export type ModalProps = ModalPropsBehaviour1 | ModalPropsBehaviour2
