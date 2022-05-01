import styled from "@emotion/styled";
import { css } from "@emotion/react";
// Components
import Variables from "./Variables";
// Styles
const Tag = styled.span `
    display: inline-flex;
    align-items: center;
    transition: ${Variables.Transitions.Short};
    padding: ${Variables.Spacers.XXS} ${Variables.Spacers.S};
    border-radius: ${props => props.pill ? Variables.Radiuses.Round : Variables.Radiuses.M};
    font-size: ${Variables.FontSizes.Small};

    background-color: ${props => props.color === "primary"
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
                        : props.color === "disabled"
                            ? Variables.Colors.Gray100
                            : props.color};

    color: ${props => props.color === "white"
    ? Variables.Colors.Primary500
    : props.color === "disabled"
        ? Variables.Colors.Gray500
        : Variables.Colors.White};

    ${props => props.justify &&
    css `
            justify-self: ${props.justify};
        `}
`;
export default Tag;
