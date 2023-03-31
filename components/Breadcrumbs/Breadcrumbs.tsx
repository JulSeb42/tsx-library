/*=============================================== Breadcrumbs component ===============================================*/

import { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"

import { Icon, uuid } from "../../"
import { ChevronRightIcon } from "../../icons"

import * as Styles from "./styles"
import type { BreadcrumbsProps } from "./types"

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
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => (
        <Styles.StyledBreadcrumbs
            ref={ref}
            as={as}
            color={color}
            linkColor={linkColor}
            $separator={separator}
            {...rest}
        >
            {items.map(({ text, href }) => (
                <Fragment key={uuid()}>
                    <Styles.Item
                        as={href ? "a" : "span"}
                        href={href ? href : undefined}
                    >
                        {text}
                    </Styles.Item>

                    {href && (
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
                </Fragment>
            ))}
        </Styles.StyledBreadcrumbs>
    )
)

export default Breadcrumbs
