/*=============================================== Section ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { SectionProps } from "./types"

const Section = ({ gap = "large", children, div, ...props }: SectionProps) => (
    <Styles.StyledSection $gap={gap} as={div ? "div" : "section"} {...props}>
        {children}
    </Styles.StyledSection>
)

export default Section
