/*=============================================== Key component ===============================================*/

import React, { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"
import classNames from "classnames"

import { Flexbox, uuid } from "../../"

import { StyledKey } from "./styles"
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
                            <StyledKey className="key" {...props}>
                                {key}
                            </StyledKey>

                            {i !== keys?.length - 1 && (
                                <span className="separator">+</span>
                            )}
                        </Fragment>
                    ))}
                </Flexbox>
            )

        return (
            <StyledKey className={classNames("key", className)} {...props}>
                {keys.join("")}
            </StyledKey>
        )
    }
)

export default Key
