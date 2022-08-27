/*=============================================== Table ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { TableProps } from "./types"

const Table = ({ options, children, ...props }: TableProps) => (
    <Styles.StyledTable
        $tableStyle={options?.variant || "bordered"}
        $textAlign={options?.textAlign}
        $vAlign={options?.vAlign || "top"}
        {...props}
    >
        {children}
    </Styles.StyledTable>
)

export default Table
