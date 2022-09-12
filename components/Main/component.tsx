/*=============================================== Main ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { MainProps } from "./types"

const Main = ({
    size,
    contentWidth = "default",
    position,
    children,
    alignContent,
    alignItems,
    justifyContent,
    justifyItems,
    gap = "l",
    as,
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
        $contentWidth={contentWidth}
        as={as}
        {...props}
    >
        {children}
    </Styles.StyledMain>
)

export default Main
