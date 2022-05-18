// Imports
import React from "react"

export interface commonProps {
    align?:
        | "left"
        | "center"
        | "right"
        | "justify"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    colorLink?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "currentColor"
        | string
    colorLinkHover?: string
    colorLinkActive?: string
}

export interface titleProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        commonProps {
    display?: boolean
}

export interface h1Props extends titleProps {
    hidden?: boolean
}

export interface paragraphsProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        commonProps {}

export interface pProps extends paragraphsProps {
    pre?: boolean
}

export interface listProps
    extends React.HTMLAttributes<HTMLUListElement>,
        commonProps {
    gap?: string | number
}
