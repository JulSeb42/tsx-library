/*=============================================== Text component ===============================================*/

import React, { forwardRef } from "react"
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
        { tag, ...rest }: TextProps,
        ref?: ForwardedRef<
            HTMLElement &
                HTMLParagraphElement &
                HTMLHeadingElement &
                HTMLQuoteElement &
                HTMLUListElement &
                HTMLOListElement
        >
    ) => {
        if (tag === "h1") return <H1 ref={ref} {...rest} />

        if (tag === "h2") return <H2 ref={ref} {...rest} />

        if (tag === "h3") return <H3 ref={ref} {...rest} />

        if (tag === "h4") return <H4 ref={ref} {...rest} />

        if (tag === "h5") return <H5 ref={ref} {...rest} />

        if (tag === "h6") return <H6 ref={ref} {...rest} />

        if (tag === "strong") return <Strong ref={ref} {...rest} />

        if (tag === "em") return <Em ref={ref} {...rest} />

        if (tag === "small") return <Small ref={ref} {...rest} />

        if (tag === "blockquote") return <Blockquote ref={ref} {...rest} />

        if (tag === "ul") return <Ul ref={ref} {...rest} />

        if (tag === "ol") return <Ol ref={ref} {...rest} />

        if (tag === "dl") return <Dl ref={ref} {...rest} />

        return <P ref={ref} {...rest} />
    }
)

export default Text
