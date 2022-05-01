// Packages
import styled from "@emotion/styled";
import { css } from "@emotion/react";
const Img = styled.img `
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    z-index: 1;
    display: block;

    ${props => props.fit &&
    css `
            object-fit: ${props.fit};
        `}
`;
export default Img;
