/*=============================================== Modal types ===============================================*/

import React from "react"

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    isOpen: boolean
    close?: (e: React.MouseEvent<HTMLButtonElement>) => void
    iconClose?: string
    labelClose?: string
}
