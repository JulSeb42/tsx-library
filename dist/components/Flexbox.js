import styled from "@emotion/styled";
// Styles
const Flexbox = styled.div `
    display: flex;
    align-items: ${props => props.align || "flex-start"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-direction: ${props => props.direction || "row"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || 0};
`;
export default Flexbox;
