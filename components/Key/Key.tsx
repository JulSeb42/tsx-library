/*=============================================== Key component ===============================================*/

import { forwardRef, Fragment } from "react"
import type { ForwardedRef } from "react"

import { Flexbox, uuid } from "../../"
import type {} from "../../types"

import * as Styles from "./styles"
import type { KeyProps } from "./types"

const Key = forwardRef(
    (
        {
            as,
            keys,
            fontColor = "font",
            fontSize = "small",
            backgroundColor = "primary-50",
            separator,
            gap = "xxs",
            borderColor = "primary",
            padding = {
                topBottom: "none",
                leftRight: "xxs",
            },
            borderWidth = 1,
            borderRadius = "xs",
            ...rest
        }: KeyProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        const props = {
            as,
            $fontColor: fontColor,
            $fontSize: fontSize,
            $backgroundColor: backgroundColor,
            $gap: gap,
            ref: ref,
            $borderColor: borderColor,
            $padding: padding,
            $borderRadius: borderRadius,
            $borderWidth: borderWidth,
            ...rest,
        }

        if (separator)
            return (
                <Flexbox gap={gap} alignItems="center" inline>
                    {keys.map((key, i) => (
                        <Fragment key={uuid()}>
                            <Styles.StyledKey {...props}>
                                {key}
                            </Styles.StyledKey>

                            {i !== keys?.length - 1 && (
                                <Styles.Separator
                                    $color={
                                        typeof separator === "string"
                                            ? separator
                                            : fontColor
                                    }
                                >
                                    +
                                </Styles.Separator>
                            )}
                        </Fragment>
                    ))}
                </Flexbox>
            )

        return <Styles.StyledKey {...props}>{keys.join("")}</Styles.StyledKey>
    }
)

export default Key
