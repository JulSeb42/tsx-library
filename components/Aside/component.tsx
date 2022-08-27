/*=============================================== Aside component ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { AsideProps } from "./types"

const Aside = ({
    size,
    position,
    children,
    alignContent,
    alignItems,
    justifyContent,
    justifyItems,
    gap = "l",
    ...props
}: AsideProps) => (
    <Styles.StyledAside
        $size={size}
        $position={position}
        $alignContent={alignContent}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $justifyItems={justifyItems}
        $gap={gap}
        {...props}
    >
        {children}
    </Styles.StyledAside>
)

export default Aside
