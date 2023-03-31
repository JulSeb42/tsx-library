/*=============================================== CalendarIcon ===============================================*/

/*==================== Imports ====================*/

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

/*==================== Component ====================*/

export const MinusIcon = ({
    size = 64,
    color = "currentColor",
    ...rest
}: IconProps) => (
    <StyledIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        $size={size}
        $color={color}
        {...rest}
    >
        <path d="M5 11H19V13H5V11Z" fill="currentColor" />
    </StyledIcon>
)
