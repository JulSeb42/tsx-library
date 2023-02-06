/*=============================================== Footer types ===============================================*/

import React from "react"

import { AllColorsTypes, ColorsHoverTypes } from "../../types"
import { FooterItemProps } from "../../types"
import { RequireAtLeastOne } from "../../utils/RequireAtLeastOne"

enum directions {
    horizontal,
    vertical,
}

export type FooterDirectionsTypes = keyof typeof directions

type FooterLogo1 = {
    img: string
    alt?: string
    width?: number
    height?: number
    text?: never
    color?: never
}

type FooterLogo2 = {
    img?: never
    alt?: never
    width?: never
    height?: never
    text: string
    color?: AllColorsTypes
}

type FooterLogo = FooterLogo1 | FooterLogo2

interface FooterPropsBase extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
    separator?: boolean | AllColorsTypes
    accentColor?: ColorsHoverTypes
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

type FooterContent = FooterContent1 | FooterContentRequire

type FooterSeparator1 = FooterContent & {
    linksSeparator?:
        | "empty"
        | {
              icon: string
              symbol?: never
              color?: AllColorsTypes
          }
}

type FooterSeparator2 = FooterContent & {
    linksSeparator?:
        | "empty"
        | {
              icon?: never
              symbol: string
              color?: AllColorsTypes
          }
}

export type FooterProps = FooterSeparator1 | FooterSeparator2
