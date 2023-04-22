/*=============================================== StarFullIcon ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import classNames from "classnames"

import { StyledIcon } from "./styles"
import type { IconProps } from "./types"
import { stringifyPx } from "../"

/*==================== Component ====================*/

export const StarFullIcon = ({
    size = 64,
    color = "currentColor",
    style,
    onClick,
    className,
    ...rest
}: IconProps) => (
    <StyledIcon
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            ["--icon-size" as any]: stringifyPx(size),
            ...style,
        }}
        className={classNames({ "is-clickable": !!onClick }, className)}
        onClick={onClick}
        $color={color}
        {...rest}
    >
        <path
            d="M21.947 9.17901C21.8842 8.99388 21.7685 8.83121 21.6142 8.71107C21.46 8.59094 21.2739 8.51861 21.079 8.50301L15.378 8.05001L12.911 2.58901C12.8325 2.41313 12.7047 2.26374 12.5431 2.15887C12.3815 2.05401 12.193 1.99815 12.0004 1.99805C11.8077 1.99794 11.6192 2.05359 11.4575 2.15828C11.2957 2.26296 11.1678 2.41221 11.089 2.58801L8.62203 8.05001L2.92103 8.50301C2.72948 8.51819 2.54636 8.58823 2.39358 8.70475C2.2408 8.82127 2.12482 8.97934 2.05952 9.16004C1.99422 9.34075 1.98236 9.53645 2.02537 9.72372C2.06838 9.91099 2.16443 10.0819 2.30203 10.216L6.51503 14.323L5.02503 20.775C4.97978 20.9703 4.99428 21.1747 5.06665 21.3617C5.13901 21.5486 5.26589 21.7095 5.43083 21.8235C5.59577 21.9374 5.79115 21.9991 5.99161 22.0007C6.19208 22.0022 6.38837 21.9434 6.55503 21.832L12 18.202L17.445 21.832C17.6154 21.9451 17.8162 22.0033 18.0207 21.9988C18.2251 21.9944 18.4232 21.9274 18.5884 21.8069C18.7536 21.6865 18.878 21.5183 18.9448 21.3251C19.0116 21.1318 19.0176 20.9228 18.962 20.726L17.133 14.326L21.669 10.244C21.966 9.97601 22.075 9.55801 21.947 9.17901V9.17901Z"
            fill="currentColor"
        />
    </StyledIcon>
)
