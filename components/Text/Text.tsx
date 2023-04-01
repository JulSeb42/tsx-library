/*=============================================== Text component ===============================================*/

import React from "react"
import type { ForwardedRef } from "react"

import H1 from "./templates/H1"
import H2 from "./templates/H2"
import H3 from "./templates/H3"
import H4 from "./templates/H4"
import H5 from "./templates/H5"
import H6 from "./templates/H6"
import P from "./templates/P"
import Strong from "./templates/Strong"
import Em from "./templates/Em"
import Small from "./templates/Small"
import Blockquote from "./templates/Blockquote"
import Ul from "./templates/Ul"
import Ol from "./templates/Ol"
import Dl from "./templates/Dl"

import { TagTypes, TextProps } from "./types"

const renderComponent = (
    props: TextProps,
    tag?: TagTypes,
    ref?: ForwardedRef<
        HTMLElement &
            HTMLParagraphElement &
            HTMLHeadingElement &
            HTMLQuoteElement &
            HTMLUListElement &
            HTMLOListElement
    >
) => {
    switch (tag) {
        case "h1":
            return (
                <H1 ref={ref} {...props}>
                    {props.children}
                </H1>
            )
        case "h2":
            return (
                <H2 ref={ref} {...props}>
                    {props.children}
                </H2>
            )
        case "h3":
            return (
                <H3 ref={ref} {...props}>
                    {props.children}
                </H3>
            )
        case "h4":
            return (
                <H4 ref={ref} {...props}>
                    {props.children}
                </H4>
            )
        case "h5":
            return (
                <H5 ref={ref} {...props}>
                    {props.children}
                </H5>
            )
        case "h6":
            return (
                <H6 ref={ref} {...props}>
                    {props.children}
                </H6>
            )
        case "p":
            return (
                <P ref={ref} {...props}>
                    {props.children}
                </P>
            )
        case "strong":
            return (
                <Strong ref={ref} {...props}>
                    {props.children}
                </Strong>
            )
        case "em":
            return (
                <Em ref={ref} {...props}>
                    {props.children}
                </Em>
            )
        case "small":
            return (
                <Small ref={ref} {...props}>
                    {props.children}
                </Small>
            )
        case "blockquote":
            return (
                <Blockquote ref={ref} {...props}>
                    {props.children}
                </Blockquote>
            )
        case "ul":
            return (
                <Ul ref={ref} {...props}>
                    {props.children}
                </Ul>
            )
        case "ol":
            return (
                <Ol ref={ref} {...props}>
                    {props.children}
                </Ol>
            )
        case "dl":
            return (
                <Dl ref={ref} {...props}>
                    {props.children}
                </Dl>
            )
        default:
            return (
                <P ref={ref} {...props}>
                    {props.children}
                </P>
            )
    }
}

const Text = ({ tag, ...props }: TextProps) => renderComponent(props, tag)

export default Text
