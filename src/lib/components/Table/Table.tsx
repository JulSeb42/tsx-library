/*=============================================== Table component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { uuid } from "../../"

import * as Styles from "./styles"
import type { TableProps } from "./types"

const Table = forwardRef(
    (
        {
            as,
            children,
            variant = "bordered",
            textAlign = "left",
            vAlign = "text-top",
            headerBackground = "primary",
            headerTextColor = "background",
            textColor = "currentColor",
            borderColor = "gray-200",
            headerBorderColor = "background",
            backgroundEven = "gray-50",
            backgroundOdd = "background",
            textColorEven = "currentColor",
            textColorOdd = "currentColor",
            headers,
            linkStylesHead,
            linkStylesBody,
            ...rest
        }: TableProps,
        ref?: ForwardedRef<HTMLTableElement>
    ) => (
        <Styles.StyledTable
            ref={ref}
            as={as}
            $tableStyle={variant || "bordered"}
            $textAlign={textAlign}
            $vAlign={vAlign || "top"}
            $backgroundEven={backgroundEven}
            $backgroundOdd={backgroundOdd}
            $borderColor={borderColor}
            $headerBackground={headerBackground}
            $headerTextColor={headerTextColor}
            $textColor={textColor}
            $textColorEven={textColorEven}
            $textColorOdd={textColorOdd}
            $headerBorderColor={headerBorderColor}
            $linkStylesHead={linkStylesHead}
            $linkStylesBody={linkStylesBody}
            {...rest}
        >
            {headers && (
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={uuid()}>{header}</th>
                        ))}
                    </tr>
                </thead>
            )}

            {headers ? <tbody>{children}</tbody> : children}
        </Styles.StyledTable>
    )
)

export default Table
