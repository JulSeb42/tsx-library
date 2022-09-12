/*=============================================== Table ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { TableProps } from "./types"

const Table = ({
    children,
    variant = "bordered",
    textAlign = "left",
    vAlign = "text-top",
    headerBackground = "primary",
    headerTextColor,
    textColor,
    linkColor = "primary",
    borderColor,
    headerBorderColor,
    backgroundEven,
    backgroundOdd,
    textColorEven,
    textColorOdd,
    linkColorHeader,
    ...props
}: 
TableProps) => (
    <Styles.StyledTable
        $tableStyle={variant || "bordered"}
        $textAlign={textAlign}
        $vAlign={vAlign || "top"}
        $backgroundEven={backgroundEven}
        $backgroundOdd={backgroundOdd}
        $borderColor={borderColor}
        $headerBackground={headerBackground}
        $headerTextColor={headerTextColor}
        $linkColor={linkColor}
        $textColor={textColor}
        $textColorEven={textColorEven}
        $textColorOdd={textColorOdd}
        $headerBorderColor={headerBorderColor}
        $linkColorHeader={linkColorHeader}
        {...props}
    >
        {children}
    </Styles.StyledTable>
)

export default Table
