// Imports
import React from "react"

import { props as flexboxProps } from "../Flexbox/types"

export interface props extends flexboxProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handlePrev: (event: React.MouseEvent<HTMLElement>) => void
    handleNext: (event: React.MouseEvent<HTMLElement>) => void
    active: number
    totalPages: number
    customIconPrev?: string
    customIconNext?: string
}
