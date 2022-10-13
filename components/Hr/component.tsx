/*=============================================== Hr ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { HrProps } from "./types"

const Hr = ({
    color = "gray-200",
    height = 1,
    width = "100%",
    margin,
    ...props
}: HrProps) => (
    <Styles.StyledHr
        $color={color}
        $height={height}
        $width={width}
        $margin={
            typeof margin === "string" || typeof margin === "number"
                ? margin
                : undefined
        }
        $marginLeft={typeof margin === "object" ? margin?.left : undefined}
        $marginTop={typeof margin === "object" ? margin?.top : undefined}
        $marginRight={typeof margin === "object" ? margin?.right : undefined}
        $marginBottom={typeof margin === "object" ? margin?.bottom : undefined}
        {...props}
    />
)

export default Hr
