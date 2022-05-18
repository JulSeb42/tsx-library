// Imports
import React from "react"
import { commonProps as textProps } from "../Font/types"

export interface styleProps extends React.HTMLAttributes<HTMLParagraphElement>, textProps {
    icon?: string
}

export interface props extends React.HTMLAttributes<HTMLParagraphElement> {
    to?: string
}
