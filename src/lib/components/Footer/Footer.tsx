/*=============================================== Footer component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"

import { uuid } from "../../"

import {
    StyledFooter,
    LogoImg,
    FooterLinks,
    SeparatorContainer,
    TextLogo,
} from "./styles"
import type { FooterProps } from "./types"

const Footer = forwardRef(
    (
        {
            as,
            separator,
            logo,
            items,
            direction = "horizontal",
            className,
            ...rest
        }: FooterProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledFooter
                ref={ref}
                as={as}
                className={classNames(
                    { "with-separator": separator },
                    className
                )}
                data-direction={direction}
                {...rest}
            >
                {logo &&
                    (logo.img ? (
                        <LogoImg
                            src={logo.img}
                            alt={logo.alt || "Logo"}
                            width={logo?.width || 100}
                            height={logo?.height || 30}
                            className="footer-logo"
                        />
                    ) : (
                        <TextLogo className="footer-logo">{logo.text}</TextLogo>
                    ))}

                {items && (
                    <FooterLinks className="footer-links">
                        {items.map(
                            ({ content, onClick, blank, href, to }, i) => (
                                <Fragment key={uuid()}>
                                    {href ? (
                                        <a
                                            href={href}
                                            target={
                                                blank ? "_blank" : undefined
                                            }
                                            rel={
                                                blank
                                                    ? "noreferrer noopener"
                                                    : undefined
                                            }
                                            className="footer-link"
                                        >
                                            {content}
                                        </a>
                                    ) : to ? (
                                        <Link
                                            to={to}
                                            target={
                                                blank ? "_blank" : undefined
                                            }
                                            rel={
                                                blank
                                                    ? "noreferrer noopener"
                                                    : undefined
                                            }
                                            className="footer-link"
                                        >
                                            {content}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={onClick}
                                            className="footer-link"
                                            type="button"
                                        >
                                            {content}
                                        </button>
                                    )}

                                    {i !== items.length - 1 && (
                                        <SeparatorContainer className="footer-links-separator">
                                            •
                                        </SeparatorContainer>
                                    )}
                                </Fragment>
                            )
                        )}
                    </FooterLinks>
                )}
            </StyledFooter>
        )
    }
)

export default Footer
