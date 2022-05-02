// Packages
import { HTMLAttributes } from "react"

// Types
export interface h1Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
    hidden?: boolean
}

export interface h2Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

export interface h3Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

export interface h4Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

export interface h5Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    display?: boolean
    color?: string
}

export interface h6Props extends HTMLAttributes<HTMLHeadingElement> {
    align?: string
    color?: string
}

export interface pProps extends HTMLAttributes<HTMLParagraphElement> {
    align?: string
    pre?: boolean
    color?: string
}

export interface smallProps extends HTMLAttributes<HTMLElement> {
    align?: string
    color?: string
}

export interface strongProps extends HTMLAttributes<HTMLElement> {
    align?: string
    color?: string
}

export interface emProps extends HTMLAttributes<HTMLElement> {
    align?: string
    color?: string
}

export interface listProps extends HTMLAttributes<HTMLUListElement> {
    gap?: string | number
    color?: string
    align?: string
}
