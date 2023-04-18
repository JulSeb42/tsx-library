/*=============================================== Key component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Flexbox, uuid } from "../../"

import * as Styles from "./styles"
import type { KeyProps } from "./types"

const Key = forwardRef(
    (
        {
            as,
            keys,
            withSeparator,
            accentColor = "primary",
            className,
            ...rest
        }: KeyProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const props = {
            as,
            ref,
            $accentColor: accentColor,
            ...rest,
        }

        if (withSeparator)
            return (
                <Flexbox
                    gap="xxs"
                    alignItems="center"
                    className={className}
                    inline
                >
                    {keys.map((key, i) => (
                        <Fragment key={uuid()}>
                            <Styles.StyledKey className="key" {...props}>
                                {key}
                            </Styles.StyledKey>

                            {i !== keys?.length - 1 && (
                                <span className="separator">+</span>
                            )}
                        </Fragment>
                    ))}
                </Flexbox>
            )

        return (
            <Styles.StyledKey
                className={classNames("key", className)}
                {...props}
            >
                {keys.join("")}
            </Styles.StyledKey>
        )
    }
)

export default Key
