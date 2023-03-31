/*=============================================== EditorCodeIcon ===============================================*/

/*==================== Imports ====================*/

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"

/*==================== Component ====================*/

export const EditorCodeIcon = ({
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
            d="M3 5V3H15C15.2652 3 15.5196 3.10536 15.7071 3.29289C15.8946 3.48043 16 3.73478 16 4V20C16 20.2652 15.8946 20.5196 15.7071 20.7071C15.5196 20.8946 15.2652 21 15 21H3V19H14V5H3Z"
            fill={color}
        />
        <path
            d="M21 19V21H19C18.7348 21 18.4804 20.8946 18.2929 20.7071C18.1054 20.5196 18 20.2652 18 20V4C18 3.73478 18.1054 3.48043 18.2929 3.29289C18.4804 3.10536 18.7348 3 19 3H21V5H20V19H21Z"
            fill={color}
        />
    </StyledIcon>
)
