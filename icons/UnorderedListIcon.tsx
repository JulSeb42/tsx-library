/*=============================================== UnorderedListIcon ===============================================*/

/*==================== Imports ====================*/

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

/*==================== Component ====================*/

export const UnorderedListIcon = ({
    size = 64,
    color = "currentColor",
    ...rest
}: IconProps) => {
    return (
        <StyledIcon
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M4 6H6V8H4V6ZM4 11H6V13H4V11ZM4 16H6V18H4V16ZM20 8V6H8.023V8H18.8H20ZM8 11H20V13H8V11ZM8 16H20V18H8V16Z"
                fill={color}
            />
        </StyledIcon>
    )
}
