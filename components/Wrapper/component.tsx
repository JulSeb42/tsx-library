/*=============================================== Wrapper ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { WrapperProps } from "./types"

const Wrapper = ({ template, children, ...props }: WrapperProps) => (
    <Styles.StyledWrapper $template={template} {...props}>
        {children}
    </Styles.StyledWrapper>
)

export default Wrapper
