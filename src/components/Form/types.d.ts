// Packages
import React from "react"

// Types
export interface props extends React.HTMLAttributes<HTMLFormElement> {
    btnPrimary?: string
    btnCancel?: string
    btnReset?: string
    colorPrimary?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | string
    iconLeftPrimary?: string
    iconRightPrimary?: string
    loading?: boolean
    colorCancel?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | string
    iconLeftCancel?: string
    iconRightCancel?: string
    textBtnCancel?: string
    textBtnReset?: string
    colorReset?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | string
    iconLeftReset?: string
    iconRightReset?: string
    onClickReset?: (event: React.MouseEvent<HTMLElement>) => void
}
