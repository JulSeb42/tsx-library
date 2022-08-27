/*=============================================== Loader ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { LoaderProps } from "./types"

const Loader = ({ options, ...props }: LoaderProps) => (
    <Styles.StyledLoader
        $size={options?.size || 48}
        $borderSize={options?.borderSize || 8}
        $speed={options?.speed || 1000}
        $color={options?.color || "primary"}
        {...props}
    />
)

export default Loader
