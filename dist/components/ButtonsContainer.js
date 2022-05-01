// Packages
import styled from "@emotion/styled";
// Components
import Variables from "./Variables";
import Flexbox from "./Flexbox";
// Styles
const ButtonsContainer = styled(Flexbox) `
    align-items: center;
    gap: ${props => props.gap || Variables.Spacers.S};
`;
export default ButtonsContainer;
