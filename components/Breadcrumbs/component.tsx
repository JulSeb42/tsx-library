/*=============================================== Breadcrumbs ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import ChevronRightIcon from "../../icons/ChevronRightIcon"
import { uuid } from "../../utils/utils"
import Icon from "../Icon"

import * as Styles from "./styles"
import { BreadcrumbsProps } from "./types"

const Breadcrumbs = ({
    items,
    color = "currentColor",
    linkColor = "primary",
    separator = "slash",
    customIcon,
    ...props
}: BreadcrumbsProps) => (
    <Styles.StyledBreacrumbs
        color={color}
        linkColor={linkColor}
        $separator={separator}
        {...props}
    >
        {items.map(({ text, to }) => (
            <React.Fragment key={uuid()}>
                <Styles.Item as={to ? Link : "span"} to={to ? to : undefined}>
                    {text}
                </Styles.Item>

                {to && (
                    <Styles.Separator $separator={separator || "slash"} $customIcon={!!customIcon}>
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
    </Styles.StyledBreacrumbs>
)

export default Breadcrumbs
