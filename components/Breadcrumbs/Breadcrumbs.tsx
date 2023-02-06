/*=============================================== Breadcrumbs component ===============================================*/

import React, { forwardRef } from "react"
import { Link } from "react-router-dom"

import { Icon, uuid } from "../../"
import ChevronRightIcon from "../../icons/ChevronRightIcon"

import * as Styles from "./styles"
import { BreadcrumbsProps } from "./types"

const Breadcrumbs = forwardRef(
    (
        {
            as,
            items,
            color = "currentColor",
            linkColor = "primary",
            separator = "slash",
            customIcon,
            ...rest
        }: BreadcrumbsProps,
        ref?: React.ForwardedRef<HTMLParagraphElement>
    ) => (
        <Styles.StyledBreadcrumbs
            ref={ref}
            as={as}
            color={color}
            linkColor={linkColor}
            $separator={separator}
            {...rest}
        >
            {items.map(({ text, to }) => (
                <React.Fragment key={uuid()}>
                    <Styles.Item
                        as={to ? Link : "span"}
                        to={to ? to : undefined}
                    >
                        {text}
                    </Styles.Item>

                    {to && (
                        <Styles.Separator
                            $separator={separator || "slash"}
                            $customIcon={!!customIcon}
                        >
                            {customIcon ? (
                                typeof customIcon === "string" ? (
                                    <Icon src={customIcon} size={20} />
                                ) : (
                                    customIcon
                                )
                            ) : separator === "icon" ? (
                                <ChevronRightIcon size={20} />
                            ) : (
                                "/"
                            )}
                        </Styles.Separator>
                    )}
                </React.Fragment>
            ))}
        </Styles.StyledBreadcrumbs>
    )
)

export default Breadcrumbs
