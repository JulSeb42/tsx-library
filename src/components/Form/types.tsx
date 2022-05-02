// Packages
import React from "react"

// Types
export interface props extends React.HTMLAttributes<HTMLFormElement> {
    btnPrimary?: string
    btnCancel?: string
    btnReset?: string
    colorPrimary?: string
    iconLeftPrimary?: string
    iconRightPrimary?: string
    loading?: boolean
    colorCancel?: string
    iconLeftCancel?: string
    iconRightCancel?: string
    textBtnCancel?: string
    textBtnReset?: string
    colorReset?: string
    iconLeftReset?: string
    iconRightReset?: string
    onClickReset?: (event: React.MouseEvent<HTMLElement>) => void
}
