// Packages
import { HTMLAttributes } from "react"

// Types
export interface h1Props extends HTMLAttributes<HTMLHeadingElement> {
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
    display?: boolean
    color?:
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
    hidden?: boolean
}

export interface h2Props extends HTMLAttributes<HTMLHeadingElement> {
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
    display?: boolean
    color?:
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
}

export interface h3Props extends HTMLAttributes<HTMLHeadingElement> {
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
    display?: boolean
    color?:
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
}

export interface h4Props extends HTMLAttributes<HTMLHeadingElement> {
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
    display?: boolean
    color?:
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
}

export interface h5Props extends HTMLAttributes<HTMLHeadingElement> {
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
    display?: boolean
    color?:
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
}

export interface h6Props extends HTMLAttributes<HTMLHeadingElement> {
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
    color?:
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
}

export interface pProps extends HTMLAttributes<HTMLParagraphElement> {
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
    pre?: boolean
    color?:
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
}

export interface smallProps extends HTMLAttributes<HTMLElement> {
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
    color?:
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
}

export interface strongProps extends HTMLAttributes<HTMLElement> {
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
    color?:
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
}

export interface emProps extends HTMLAttributes<HTMLElement> {
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
    color?:
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
}

export interface listProps extends HTMLAttributes<HTMLUListElement> {
    gap?: string | number
    color?:
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
}
