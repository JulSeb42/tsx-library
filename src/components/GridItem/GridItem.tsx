/*=============================================== GridItem component ===============================================*/

import React from "react"

import * as Styles from "./styles"
import type { GridItemProps } from "./types"

const GridItem = ({ children }: GridItemProps) => (
    <Styles.StyledGridItem>{children || "Grid item"}</Styles.StyledGridItem>
)

export default GridItem
