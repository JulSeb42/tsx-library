/*=============================================== CheckIcon ===============================================*/

/*==================== Imports ====================*/

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

/*==================== Component ====================*/

export const CheckIcon = ({
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
        <path
            d="M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.707L18.293 7.293L10 15.586Z"
            fill="currentColor"
        />
    </StyledIcon>
)
