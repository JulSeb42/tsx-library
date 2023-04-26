/*=============================================== Breadcrumbs component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import { Link } from "react-router-dom"

import { Icon, uuid } from "../../"
import { ChevronRightIcon } from "../../icons"

import { StyledBreadcrumbs, Separator, Item } from "./styles"
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
        <StyledBreadcrumbs
            ref={ref}
            as={as}
            data-separator={separator}
            $color={color}
            {...rest}
        >
            {items
                ? items.map(({ text, href, to }) => (
                      <Fragment key={uuid()}>
                          <Item
                              as={to ? Link : href ? "a" : "span"}
                              href={href ? href : undefined}
                              to={to ? to : undefined}
                              className="breadcrumbs-item"
                          >
                              {text}
                          </Item>

                          {(href || to) && (
                              <Separator
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
                              </Separator>
                          )}
                      </Fragment>
                  ))
                : children}
        </StyledBreadcrumbs>
    )
)

export default Breadcrumbs
