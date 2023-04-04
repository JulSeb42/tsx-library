/*=============================================== Breadcrumbs component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { Icon, uuid } from "../../"
import { ChevronRightIcon } from "../../icons"

import * as Styles from "./styles"
import type { BreadcrumbsProps } from "./types"

const Breadcrumbs = forwardRef(
    (
        {
            as,
            items,
            children,
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
            {items
                ? items.map(({ text, href, to }) => (
                      <Fragment key={uuid()}>
                          <Styles.Item
                              as={to ? Link : href ? "a" : "span"}
                              href={href ? href : undefined}
                              to={href ? href : undefined}
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
                  ))
                : children}
        </Styles.StyledBreadcrumbs>
    )
)

export default Breadcrumbs
