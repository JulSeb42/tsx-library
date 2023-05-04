/*=============================================== Footer types ===============================================*/

import type { ElementType, HTMLAttributes } from "react"

import type { FooterItemProps, RequireAtLeastOne } from "../../types"

const directions = { horizontal: "horizontal", vertical: "vertical" } as const

export type FooterDirectionsTypes = keyof typeof directions

type FooterLogo1 = {
    img: string
    alt?: string
    width?: number
    height?: number
    text?: never
}

type FooterLogo2 = {
    img?: never
    alt?: never
    width?: never
    height?: never
    text: string
}

type FooterLogo = FooterLogo1 | FooterLogo2

interface FooterPropsBase extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType
    separator?: boolean
}

interface FooterContent1 extends FooterPropsBase {
    items: FooterItemProps[]
    logo: FooterLogo
    direction?: "horizontal"
}

interface FooterContent2 extends FooterPropsBase {
    items?: FooterItemProps[]
    logo?: FooterLogo
    direction?: "vertical"
}

type FooterContentRequire = RequireAtLeastOne<FooterContent2, "items" | "logo">

export type FooterProps = FooterContent1 | FooterContentRequire
