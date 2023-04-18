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
            color = "primary",
            separator = "slash",
            customIcon,
            ...rest
        }: BreadcrumbsProps,
        ref?: ForwardedRef<HTMLParagraphElement>
    ) => (
        <Styles.StyledBreadcrumbs
            ref={ref}
            as={as}
            $separator={separator}
            $color={color}
            {...rest}
        >
            {items
                ? items.map(({ text, href, to }) => (
                      <Fragment key={uuid()}>
                          <Styles.Item
                              as={to ? Link : href ? "a" : "span"}
                              href={href ? href : undefined}
                              to={to ? to : undefined}
                              className="breadcrumbs-item"
                          >
                              {text}
                          </Styles.Item>

                          {(href || to) && (
                              <Styles.Separator
                                  $separator={separator || "slash"}
                                  $customIcon={!!customIcon}
                                  className="breadcrumbs-separator"
                              >
                                  {customIcon ? (
                                      typeof customIcon === "string" ? (
                                          <Icon
                                              src={customIcon}
                                              size={20}
                                              className="breadcrumbs-icon"
                                          />
                                      ) : (
                                          customIcon
                                      )
                                  ) : separator === "icon" ? (
                                      <ChevronRightIcon
                                          size={20}
                                          className="breadcrumbs-icon"
                                      />
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
