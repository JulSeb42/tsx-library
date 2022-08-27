/*=============================================== Grid ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { GridProps } from "./types"

const Grid = ({
    inline,
    col,
    gap,
    columnGap,
    rowGap,
    justifyItems,
    alignItems,
    justifyContent,
    alignContent,
    padding,
    colTablet,
    colMobile,
    children,
    ...props
}: GridProps) => (
    <Styles.StyledGrid
        $inline={inline}
        $col={col}
        $gap={gap}
        $columnGap={columnGap}
        $rowGap={rowGap}
        $justifyItems={justifyItems}
        $alignItems={alignItems}
        $justifyContent={justifyContent}
        $alignContent={alignContent}
        $padding={padding}
        $colTablet={colTablet}
        $colMobile={colMobile}
        {...props}
    >
        {children}
    </Styles.StyledGrid>
)

export default Grid
