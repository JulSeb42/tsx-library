/*=============================================== Linkify component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"

import { Text, uuid } from "../../"

import { StyledLinkify } from "./styles"
import type { LinkifyProps } from "./types"

const URL_REGEX =
    // eslint-disable-next-line
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

const Linkify = forwardRef(
    (
        { as, children, blank, linkAs = "a", ...rest }: LinkifyProps,
        ref?: ForwardedRef<
            HTMLElement &
                HTMLParagraphElement &
                HTMLHeadingElement &
                HTMLQuoteElement &
                HTMLUListElement &
                HTMLOListElement
        >
    ) => {
        const words: string[] = children ? children.split(" ") : []

        return (
            // @ts-expect-error
            <Text ref={ref} as={as} {...rest}>
                {words?.map((word: string) =>
                    word.match(URL_REGEX) ? (
                        <Fragment key={uuid()}>
                            <StyledLinkify
                                as={linkAs}
                                href={word}
                                target={blank ? "_blank" : undefined}
                                rel={blank ? "noreferrer noopener" : undefined}
                                className="linkify"
                            >
                                {word}
                            </StyledLinkify>{" "}
                        </Fragment>
                    ) : (
                        word + " "
                    )
                )}
            </Text>
        )
    }
)

export default Linkify
