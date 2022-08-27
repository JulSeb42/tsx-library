/*=============================================== SrOnly ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { SrOnlyProps } from "./types"

const SrOnly = ({ children, as, ...props }: SrOnlyProps) => (
    <Styles.StyledSrOnly as={as} {...props}>
        {children}
    </Styles.StyledSrOnly>
)

export default SrOnly
