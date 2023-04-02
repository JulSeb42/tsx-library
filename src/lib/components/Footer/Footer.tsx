/*=============================================== Footer component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"

import { Icon, Text, uuid } from "../../"

import * as Styles from "./styles"
import type { FooterProps } from "./types"

const Footer = forwardRef(
    (
        {
            as,
            separator,
            accentColor = "primary",
            logo,
            linksSeparator,
            items,
            direction = "horizontal",
            ...rest
        }: FooterProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledFooter
                ref={ref}
                as={as}
                $separator={typeof separator === "string" ? true : separator}
                $separatorColor={
                    typeof separator === "string" ? separator : "gray-200"
                }
                $accentColor={accentColor}
                $direction={direction}
                {...rest}
            >
                {logo &&
                    (logo.img ? (
                        <Styles.LogoImg
                            src={logo.img}
                            alt={logo.alt || "Logo"}
                            width={logo?.width || 100}
                            height={logo?.height || 30}
                        />
                    ) : (
                        <Text tag="strong" color={logo.color || accentColor}>
                            {logo.text}
                        </Text>
                    ))}

                {items && (
                    <Styles.FooterLinks
                        $colorSeparator={
                            linksSeparator && typeof linksSeparator === "object"
                                ? linksSeparator?.color
                                : "currentColor"
                        }
                        $iconSeparator={
                            linksSeparator && typeof linksSeparator === "object"
                                ? linksSeparator?.icon
                                : undefined
                        }
                        $symbolSeparator={
                            linksSeparator && typeof linksSeparator === "object"
                                ? linksSeparator?.symbol
                                : undefined
                        }
                    >
                        {items.map(({ content, onClick, blank, href }, i) => (
                            <Fragment key={uuid()}>
                                {href ? (
                                    <a
                                        href={href}
                                        target={blank ? "_blank" : undefined}
                                        rel={
                                            blank
                                                ? "noreferrer noopener"
                                                : undefined
                                        }
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <button onClick={onClick}>{content}</button>
                                )}

                                {linksSeparator &&
                                    linksSeparator !== "empty" &&
                                    i !== items.length - 1 && (
                                        <Styles.SeparatorContainer
                                            $color={linksSeparator?.color}
                                        >
                                            {linksSeparator?.icon ? (
                                                <Icon
                                                    src={linksSeparator.icon}
                                                    size={12}
                                                />
                                            ) : linksSeparator?.symbol ? (
                                                linksSeparator?.symbol
                                            ) : (
                                                "•"
                                            )}
                                        </Styles.SeparatorContainer>
                                    )}
                            </Fragment>
                        ))}
                    </Styles.FooterLinks>
                )}
            </Styles.StyledFooter>
        )
    }
)

export default Footer
