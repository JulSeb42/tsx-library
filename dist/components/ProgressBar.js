import styled from "@emotion/styled";
// Components
import Variables from "./Variables";
// Styles
const ProgressBar = styled.span `
    width: 100%;
    height: ${props => `${props.height || 16}px`};
    background-color: ${Variables.Colors.Gray100};
    display: block;
    border-radius: ${Variables.Radiuses.Round};
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => `${props.value}%`};
        height: 100%;
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
                        : props.color || Variables.Colors.Primary500};
        border-radius: ${Variables.Radiuses.Round};
        transition: ${Variables.Transitions.Short};
    }
`;
export default ProgressBar;
