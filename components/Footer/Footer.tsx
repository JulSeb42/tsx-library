/*=============================================== Footer component ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import { Icon, Text, uuid } from "../../"

import * as Styles from "./styles"
import { FooterProps } from "./types"

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
        ref?: React.ForwardedRef<HTMLDivElement>
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
                        {items.map(({ content, to, onClick, blank, as }, i) => (
                            <React.Fragment key={uuid()}>
                                {onClick ? (
                                    <button onClick={onClick}>{content}</button>
                                ) : as === "a" ? (
                                    // eslint-disable-next-line
                                    <a
                                        href={to}
                                        target={blank ? "_blank" : ""}
                                        rel={blank ? "noreferrer noopener" : ""}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <Link
                                        to={to}
                                        target={blank ? "_blank" : ""}
                                        rel={blank ? "noreferrer noopener" : ""}
                                    >
                                        {content}
                                    </Link>
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
                            </React.Fragment>
                        ))}
                    </Styles.FooterLinks>
                )}
            </Styles.StyledFooter>
        )
    }
)

export default Footer
