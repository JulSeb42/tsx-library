/*=============================================== Table component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { uuid, Linkify } from "../../"

import { StyledTable } from "./styles"
import type { TableProps } from "./types"

const Table = forwardRef(
    (
        {
            as,
            children,
            variant = "bordered",
            headers,
            linkifyHeaders = true,
            vAlign,
            ...rest
        }: TableProps,
        ref?: ForwardedRef<HTMLTableElement>
    ) => (
        <StyledTable
            ref={ref}
            as={as}
            data-table-variant={variant}
            data-vertical-align={vAlign}
            {...rest}
        >
            {headers && (
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={uuid()}>
                                {typeof header === "string" ? (
                                    linkifyHeaders ? (
                                        <Linkify>{header}</Linkify>
                                    ) : (
                                        header
                                    )
                                ) : (
                                    header
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
            )}

            {headers ? <tbody>{children}</tbody> : children}
        </StyledTable>
    )
)

export default Table
