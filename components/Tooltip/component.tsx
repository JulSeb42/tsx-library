/*=============================================== Tooltip ===============================================*/

import React, { useState } from "react"

import * as Styles from "./styles"
import { TooltipProps } from "./types"

const Tooltip = ({ tooltip, children, options, ...props }: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <Styles.StyledTooltip
            $textStyle={options?.textStyle || "dotted"}
            $color={options?.color || "primary"}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            {...props}
        >
            <Styles.Tip $isVisible={isVisible}>{tooltip}</Styles.Tip>

            {children}
        </Styles.StyledTooltip>
    )
}

export default Tooltip
