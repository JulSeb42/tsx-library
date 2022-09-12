/*=============================================== Section ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { SectionProps } from "./types"

const Section = ({ gap = "large", children, as, ...props }: SectionProps) => (
    <Styles.StyledSection $gap={gap} as={as} {...props}>
        {children}
    </Styles.StyledSection>
)

export default Section
