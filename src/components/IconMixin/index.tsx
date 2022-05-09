// Packages
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { props } from "./types"

// Styles
const IconMixin = (props: props) => css`
    content: "";
    mask: url("/icons/${props.icon}.svg") no-repeat 50% 50%;
    mask-size: cover;
    background-color: ${props.color === "primary"
            ? Variables.Colors.Primary500
            : props.color === "secondary"
            ? Variables.Colors.Secondary500
            : props.color === "success"
            ? Variables.Colors.Success500
            : props.color === "danger"
            ? Variables.Colors.Danger500
            : props.color === "warning"
            ? Variables.Colors.Warning500
            : props.color === "white"
            ? Variables.Colors.White
            : props.color === "black"
            ? Variables.Colors.Black
            : props.color === "gray"
            ? Variables.Colors.Gray500
            : props.color
            ? props.color
            : "currentColor"};
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
