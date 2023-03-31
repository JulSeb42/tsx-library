/*=============================================== Loader component ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import LoaderOne from "./templates/LoaderOne"
import LoaderTwo from "./templates/LoaderTwo"
import LoaderThree from "./templates/LoaderThree"
import LoaderFour from "./templates/LoaderFour"

import type { LoaderProps } from "./types"

const Loader = forwardRef(
    (
        { variant, ...rest }: LoaderProps,
        ref?: ForwardedRef<HTMLSpanElement>
    ) => {
        switch (variant) {
            case 2:
                return <LoaderTwo ref={ref} {...rest} />
            case 3:
                return <LoaderThree ref={ref} {...rest} />
            case 4:
                return <LoaderFour ref={ref} {...rest} />
            default:
                return <LoaderOne ref={ref} {...rest} />
        }
    }
)

export default Loader
