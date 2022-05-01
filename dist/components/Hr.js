import styled from "@emotion/styled";
// Components
import Variables from "./Variables";
// Styles
const Hr = styled.hr `
    border: none;
    width: 100%;
    height: ${props => (props.height ? `${props.height}px` : "1px")};
    background-color: ${props => props.color || Variables.Colors.Gray200};
    margin: 0;
`;
export default Hr;
