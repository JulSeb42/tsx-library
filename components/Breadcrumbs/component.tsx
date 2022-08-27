/*=============================================== Breadcrumbs ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import ChevronRightIcon from "../../icons/ChevronRightIcon"
import { uuid } from "../../utils/utils"

import * as Styles from "./styles"
import { BreadcrumbsProps } from "./types"

const Breadcrumbs = ({ items, options, ...props }: BreadcrumbsProps) => (
    <Styles.StyledBreacrumbs
        color={options?.color}
        linkColor={options?.linkColor || "primary"}
        $separator={options?.separator || "slash"}
        {...props}
    >
        {items.map(({ text, to }) => (
            <React.Fragment key={uuid()}>
                <Styles.Item as={to ? Link : "span"} to={to ? to : undefined}>
                    {text}
                </Styles.Item>

                {to && (
                    <Styles.Separator
                        $separator={options?.separator || "slash"}
                    >
                        {options?.separator === "icon" ? (
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
