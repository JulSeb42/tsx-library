// Packages
import styled from "@emotion/styled";
// Components
import Grid from "./Grid";
import Variables from "./Variables";
// Styles
const Alert = styled(Grid) `
    padding: ${Variables.Spacers.S};
    gap: ${Variables.Spacers.S};
    background-color: ${props => props.color === "primary"
    ? Variables.Colors.Primary50
    : props.color === "secondary"
        ? Variables.Colors.Secondary50
        : props.color === "success"
            ? Variables.Colors.Success50
            : props.color === "danger"
                ? Variables.Colors.Danger50
                : props.color === "warning"
                    ? Variables.Colors.Warning50
                    : props.color === "white"
                        ? Variables.Colors.White
                        : props.color || Variables.Colors.Success50};
    border: 1px solid
        ${props => props.color === "primary"
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
                        : props.borderColor || Variables.Colors.Success500};
    border-radius: ${Variables.Radiuses.M};
`;
export default Alert;
