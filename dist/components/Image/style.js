// Packages
import styled from "@emotion/styled";
// Components
import Variables from "../Variables";
import * as Font from "../Font";
// Styles
const Fallback = styled.div `
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${Variables.Colors.Gray500};
`;
const Container = styled.div `
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};

    & > div {
        position: relative;
        width: ${props => props.width};
        height: ${props => props.height};
    }
`;
const Caption = styled(Font.P) `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
    background-color: ${Variables.Overlays.Plain.Black50};
    color: ${Variables.Colors.White};
`;
export { Fallback, Container, Caption };
