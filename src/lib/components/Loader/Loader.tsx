/*=============================================== Loader component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import LoaderOne from "./templates/LoaderOne"
import LoaderTwo from "./templates/LoaderTwo"
import LoaderThree from "./templates/LoaderThree"
import LoaderFour from "./templates/LoaderFour"

import type { LoaderProps } from "./types"

const Loader = forwardRef(
    (
        { variant = 1, ...rest }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        if (variant === 2) return <LoaderTwo ref={ref} {...rest} />

        if (variant === 3) return <LoaderThree ref={ref} {...rest} />

        if (variant === 4) return <LoaderFour ref={ref} {...rest} />

        return <LoaderOne ref={ref} {...rest} />
    }
)

export default Loader
