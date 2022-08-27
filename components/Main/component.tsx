/*=============================================== Main ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { MainProps } from "./types"

const Main = ({
    size,
    position,
    children,
    alignContent,
    alignItems,
    justifyContent,
    justifyItems,
    gap = "l",
    ...props
}: MainProps) => (
    <Styles.StyledMain
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
    </Styles.StyledMain>
)

export default Main
