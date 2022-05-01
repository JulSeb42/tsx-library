// Packages
import { css } from "@emotion/react"

// Types
interface props {
    icon: string
    size: number
    color?: string
}

// Styles
const IconMixin = (props: props) => css`
    content: "";
    mask: url("/icons/${props.icon}.svg") no-repeat 50% 50%;
    mask-size: cover;
    background-color: ${props.color || "currentColor"};
    display: inline-block;
    width: ${props.size}px;
    height: ${props.size}px;
`

export default IconMixin

// How to use the mixin
// Import in the file you want to use this component
// import { IconMixin } from "/path/to/IconMixin"
// div:before {
//     ${IconMixin({
//         icon: "name-of-icon",
//         size: 12,
//         color: "black",
//     })}
// }
