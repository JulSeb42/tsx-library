/*=============================================== Text component ===============================================*/

import { forwardRef } from "react"
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

import type { TextProps } from "./types"

const Text = forwardRef(
    (
        { tag, children, ...rest }: TextProps,
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
                    <H1 ref={ref} {...rest}>
                        {children}
                    </H1>
                )
            case "h2":
                return (
                    <H2 ref={ref} {...rest}>
                        {children}
                    </H2>
                )
            case "h3":
                return (
                    <H3 ref={ref} {...rest}>
                        {children}
                    </H3>
                )
            case "h4":
                return (
                    <H4 ref={ref} {...rest}>
                        {children}
                    </H4>
                )
            case "h5":
                return (
                    <H5 ref={ref} {...rest}>
                        {children}
                    </H5>
                )
            case "h6":
                return (
                    <H6 ref={ref} {...rest}>
                        {children}
                    </H6>
                )
            case "p":
                return (
                    <P ref={ref} {...rest}>
                        {children}
                    </P>
                )
            case "strong":
                return (
                    <Strong ref={ref} {...rest}>
                        {children}
                    </Strong>
                )
            case "em":
                return (
                    <Em ref={ref} {...rest}>
                        {children}
                    </Em>
                )
            case "small":
                return (
                    <Small ref={ref} {...rest}>
                        {children}
                    </Small>
                )
            case "blockquote":
                return (
                    <Blockquote ref={ref} {...rest}>
                        {children}
                    </Blockquote>
                )
            case "ul":
                return (
                    <Ul ref={ref} {...rest}>
                        {children}
                    </Ul>
                )
            case "ol":
                return (
                    <Ol ref={ref} {...rest}>
                        {children}
                    </Ol>
                )
            case "dl":
                return (
                    <Dl ref={ref} {...rest}>
                        {children}
                    </Dl>
                )
            default:
                return (
                    <P ref={ref} {...rest}>
                        {children}
                    </P>
                )
        }
    }
)

export default Text
